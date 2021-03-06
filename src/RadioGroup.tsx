import React, {
  forwardRef,
  useState,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import shortId from 'shortid';
import createStyles from './createStyles';
import RadioGroupContext from './RadioGroupContext';
import { PropsFromStyles } from './types';

const useStyles = createStyles(({ css }) => ({
  root: css``,
}));

type DivProps = JSX.IntrinsicElements['div'];
interface Props extends PropsFromStyles<typeof useStyles>, DivProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  component?: string;
}

const RadioGroup = forwardRef(
  (props: Props, ref: React.Ref<HTMLDivElement>) => {
    const {
      Root,
      styles,
      component,
      value: incomingValue,
      onChange,
      ...restOfProps
    } = useStyles(props, props.component ?? 'div');

    const name = useMemo(() => `hui-group-${shortId()}`, []);

    const [stateValue, setStateValue] = useState('');

    const value = incomingValue ?? stateValue;

    // pull the reference of onChange on invocation
    const onChangeRef = useRef(onChange);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const onChange = onChangeRef.current;
        if (onChange) {
          onChange(e);
        }

        setStateValue(e.currentTarget.value);
      },
      [],
    );

    const contextValue = useMemo(
      () => ({
        name,
        value,
        handleChange,
      }),
      [handleChange, name, value],
    );

    return (
      <RadioGroupContext.Provider value={contextValue}>
        <Root ref={ref} role="radiogroup" {...restOfProps} />
      </RadioGroupContext.Provider>
    );
  },
);

export default RadioGroup;
