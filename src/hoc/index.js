import React from 'react'

function pP(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      const newProps = {
        newProps: 'something news'
      }

      return <WrappedComponent {...this.props} {...newProps}/>
    }
  }
}


function refsPP(WrappedComponent) {

  return class RefsPP extends React.Component {
    proc(wrappedComponentI) {
      console.log('this', this)
      console.group('refs Proc');
      console.log(wrappedComponentI);
      wrappedComponentI.test();
      console.groupEnd();
    }

    render() {
      const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})
      return <WrappedComponent {...props}/>
    }
  }
}

export {
    pP,
    refsPP
}
