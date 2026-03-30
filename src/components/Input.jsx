import { forwardRef } from 'react';

 const Input = forwardRef (({type='text', placeholder,value, onChange, ...rest }, ref)=> {
  
  return(
   <div className='input-item'>
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        value = { value}
        onChange={onChange}
        {...rest}
      />
   </div>
  );
 });
 Input.displayName = 'Input';
  export default Input;