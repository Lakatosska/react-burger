import { Component, ReactNode, ErrorInfo } from "react";

interface IErrorBoundaryState {
  hasError: boolean
}
interface IErrorBoundaryProps {
  children?: ReactNode
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: boolean) {
    return {hasError: true};
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log("Возникла ошибка!", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section>
          <h1 className="text text_type_main-large pl-10 pr-10 pt-20 pb-10">Что-то пошло не так :</h1>
          <p className="text text_type_main-medium pl-10 pr-10 pt-10 pb-20">
            В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.
          </p>
        </section>
      );
    }

    return this.props.children;
  }
};