import { View as BaseView, ViewProps as BaseViewProps } from "react-native";

export type ViewProps = BaseViewProps;

export const View = ({ children, style, ...props }: ViewProps) => {
  return (
    <BaseView style={[{}, style]} {...props}>
      {children}
    </BaseView>
  );
};
