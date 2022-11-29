const ButtonBasketWithLabel = withLabelHello(ButtonBasket)
const ButtonBasketWithLabel2 = withLabel(ButtonBasket)
const ButtonWithLabel = withLabel(Button)

export default function withLabel(Component){
    return function Wrapped({label, ...rest }){
      //local state would go here
      return (
        <>
          <label>
            {label}
          </label>
          <Component {...rest}/>
        </>
      )
    }
  }

export function withLabelHello(Component){
    return function WrappedComponent(){
      return (<>
        <label className='block'>
          Hello
        </label>
        <Component/>
      </>)
    }
  }

