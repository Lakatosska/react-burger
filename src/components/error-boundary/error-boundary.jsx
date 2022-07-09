import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  componentDidCatch(error, info) {
    console.log("Возникла ошибка!", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section>
          <h1 className="text text_type_main-large">Что-то пошло не так :</h1>
          <p className="text text_type_main-medium">
            В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.
          </p>
        </section>
      );
    }

    return this.props.children;
  }
};