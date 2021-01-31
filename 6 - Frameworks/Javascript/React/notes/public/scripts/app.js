"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data = {
  title: "React To-Do App",
  slogan: "Lets never forget a thing again!"
};

var Notes = function (_React$Component) {
  _inherits(Notes, _React$Component);

  function Notes(props) {
    _classCallCheck(this, Notes);

    var _this = _possibleConstructorReturn(this, (Notes.__proto__ || Object.getPrototypeOf(Notes)).call(this, props));

    _this.state = {
      options: ["Java", "C++", "Python", "React"]
    };
    _this.addOption = _this.addOption.bind(_this);
    _this.removeAll = _this.removeAll.bind(_this);
    _this.pickTask = _this.pickTask.bind(_this);
    _this.removeOption = _this.removeOption.bind(_this);
    return _this;
  }

  _createClass(Notes, [{
    key: "addOption",
    value: function addOption(optionText) {

      if (this.state.options.indexOf(optionText) > -1) {
        return 'Task already in the list.';
      } else if (optionText.length == 0) {
        return 'Task can not be left empty';
      } else if (optionText.length <= 3) {
        return 'Task length should be greater than 3';
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(optionText)
        };
      });
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "removeOption",
    value: function removeOption(optionText) {

      this.setState(function (prevState) {
        var opt = prevState.options.filter(function (option) {
          return option !== optionText;
        });
        console.log(opt);
        return {
          options: prevState.options.filter(function (option) {
            return option !== optionText;
          })
        };
      });
    }
  }, {
    key: "pickTask",
    value: function pickTask() {
      var r = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[r];
      console.log(option);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: data.title, slogan: data.slogan }),
        React.createElement(PickOption, { pickTask: this.pickTask, optionsLength: this.state.options.length }),
        React.createElement(Options, { options: this.state.options, removeOption: this.removeOption }),
        React.createElement(AddOption, { addOption: this.addOption }),
        React.createElement(Remove, { optionsLength: this.state.options.length, removeAll: this.removeAll })
      );
    }
  }]);

  return Notes;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "p",
          null,
          this.props.slogan
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Options = function (_React$Component3) {
  _inherits(Options, _React$Component3);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "div",
        null,
        this.props.options.length == 0 && React.createElement(
          "p",
          null,
          "No Options"
        ),
        this.props.options.map(function (option, index) {
          return React.createElement(Option, { key: index, index: index, optionText: option, removeOption: _this4.props.removeOption });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component4) {
  _inherits(Option, _React$Component4);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      return React.createElement(
        "div",
        null,
        this.props.index + 1,
        " - ",
        this.props.optionText,
        React.createElement(
          "button",
          { onClick: function onClick(e) {
              _this6.props.removeOption(_this6.props.optionText);
            } },
          "Remove"
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var PickOption = function (_React$Component5) {
  _inherits(PickOption, _React$Component5);

  function PickOption() {
    _classCallCheck(this, PickOption);

    return _possibleConstructorReturn(this, (PickOption.__proto__ || Object.getPrototypeOf(PickOption)).apply(this, arguments));
  }

  _createClass(PickOption, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { disabled: this.props.optionsLength == 0, onClick: this.props.pickTask },
          "Pick a Task"
        )
      );
    }
  }]);

  return PickOption;
}(React.Component);

var Remove = function (_React$Component6) {
  _inherits(Remove, _React$Component6);

  function Remove() {
    _classCallCheck(this, Remove);

    return _possibleConstructorReturn(this, (Remove.__proto__ || Object.getPrototypeOf(Remove)).apply(this, arguments));
  }

  _createClass(Remove, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.props.removeAll, disabled: this.props.optionsLength == 0 },
          "Remove All"
        )
      );
    }
  }]);

  return Remove;
}(React.Component);

var AddOption = function (_React$Component7) {
  _inherits(AddOption, _React$Component7);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this9 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this9.addOption = _this9.addOption.bind(_this9);
    _this9.state = {
      error: undefined
    };
    return _this9;
  }

  _createClass(AddOption, [{
    key: "addOption",
    value: function addOption(e) {
      e.preventDefault();
      var optionText = e.target.elements.option.value;
      var error = this.props.addOption(optionText);
      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.addOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var Footer = function (_React$Component8) {
  _inherits(Footer, _React$Component8);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "p",
        null,
        "Footer Component"
      );
    }
  }]);

  return Footer;
}(React.Component);

var appRoot = document.getElementById("app");

ReactDOM.render(React.createElement(Notes, null), appRoot);
