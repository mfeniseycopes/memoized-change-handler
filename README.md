## memoized-change-handler
 [![npm](https://img.shields.io/npm/v/memoized-change-handler.svg)](https://www.npmjs.com/package/memoized-change-handler) [![npm](https://img.shields.io/npm/dt/memoized-change-handler.svg)](https://www.npmjs.com/package/memoized-change-handler)



Helper method designed to simplify creation of React's `onChange` event handlers.

### How to use

Include the npm package in your project with `npm install --save memoized-change-handler`.

To use in a React component, `import` the generator function and pass the component as an argument. This gives the generator access to `setState`. Call the returned function with the desired component state key to generate the memoized event handler.

An example:

```js
import changeHandler from 'memoized-change-handler'

class BasicForm extends React.Component {

  constuctor(props) {
    super(props)
    this.handleChange = changeHandler(this)
  }

  render() {
    return (
      <form onSubmit={this.props.submit}>
        <label>Name
          <input type='text'
            onChange={this.handleChange('name')}
            value={this.state.name}/>
        </label>
        <label>Phone
          <input type='text'
            onChange={this.handleChange('phone')}
            value={this.state.phone}/>
        </label>
        <button>Submit</button>
      </form>
    )
  }
}
```

### Issues & Feature Requests
Please raise any issues or feature requests [here](https://github.com/mfeniseycopes/memoized-change-handler) on GitHub. Hope you enjoy!
