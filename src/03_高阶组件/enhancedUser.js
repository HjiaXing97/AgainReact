import { PureComponent } from "react";

function enhancedUser(OriginComponent) {
  class NewComponent extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        userInfo: {
          name: "hjx",
          age: 25,
        },
      };
    }

    render() {
      return <OriginComponent {...this.state.userInfo} {...this.props} />;
    }
  }

  return NewComponent;
}

export default enhancedUser;
