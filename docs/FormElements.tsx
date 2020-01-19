import React, { useState } from 'react';
import {
  createStyles,
  PropsFromStyles,
  FormControl,
  Label,
  TextInput,
  HelperText,
  TextArea,
} from 'hacker-ui';

const useStyles = createStyles(({ css, theme }) => ({
  root: css`
    padding: ${theme.gap(1)};
  `,
  title: css`
    ${theme.fonts.h3}
  `,
  section: css`
    margin-bottom: ${theme.space(1)};
    display: flex;
    flex-direction: column;
    width: ${theme.block(4.5)};
    & > *:not(:last-child) {
      margin-bottom: ${theme.space(1)};
    }
  `,
  sectionTitle: css`
    ${theme.fonts.h4}
    margin-bottom: ${theme.space(1)};
  `,
  label: css``,
  horizontalRow: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  streetAddressLabel: css`
    flex: 0 0 auto;
    width: ${theme.block(1)};
    margin-right: ${theme.space(1)};
  `,
  streetAddressInput: css`
    flex: 1 1 auto;
    overflow: hidden;
  `,
}));

interface Props extends PropsFromStyles<typeof useStyles> {}

function FormElements(props: Props) {
  const { Root, styles } = useStyles(props);
  const [hasError, setHasError] = useState(false);

  return (
    <Root>
      <h1 className={styles.title}>Form elements</h1>
      <input
        type="checkbox"
        checked={hasError}
        onChange={() => setHasError(!hasError)}
      />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Outline Input</h2>
        <FormControl hasError={hasError}>
          <Label className={styles.label}>Email</Label>
          <TextInput placeholder="hello@example.com" />
          <HelperText>This is some helper text.</HelperText>
        </FormControl>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Filled Input</h2>
        <FormControl hasError={hasError}>
          <Label className={styles.label}>Email</Label>
          <TextInput variant="filled" placeholder="hello@example.com" />
          <HelperText>This is some helper text.</HelperText>
        </FormControl>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Text area</h2>
        <FormControl hasError={hasError}>
          <Label className={styles.label}>Describe your problem</Label>
          <TextArea variant="filled" placeholder="hello@example.com" />
          <HelperText>This is some helper text.</HelperText>
        </FormControl>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Horizontal Layout</h2>
        <FormControl hasError={hasError}>
          <div className={styles.horizontalRow}>
            <Label className={styles.streetAddressLabel}>Address:</Label>
            <TextInput className={styles.streetAddressInput} />
          </div>
          <HelperText>
            We'll use this info when we ship your product.
          </HelperText>
        </FormControl>

        <FormControl hasError={hasError}>
          <div className={styles.horizontalRow}>
            <Label className={styles.streetAddressLabel}>First name:</Label>
            <TextInput className={styles.streetAddressInput} />
          </div>
          <HelperText>The quick brown fox jumps over the lazy dog.</HelperText>
        </FormControl>
      </section>
    </Root>
  );
}

export default FormElements;