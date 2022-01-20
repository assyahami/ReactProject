const Reducer = (state, action) => {
  if (action.type === 'ClearAll') {
    return { ...state, data: [] };
  }
  if (action.type === 'Remove') {
    const removeItem = state.data.filter((item) => item.id !== action.payload);
    return { ...state, data: removeItem };
  }
  if (action.type == 'Increase') {
    const increaseItem = state.data.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item
    });

    return { ...state, data: increaseItem };
  }
  if (action.type == 'decreases') {
    const Decreases = state.data.map((item) => {
      if (item.id === action.payload) {
        console.log(action.payload, item.amount);

        console.log(action.payload, item.amount);
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    }).filter((item)=>item.amount!==0)
console.log(Decreases);
    return { ...state, data: Decreases };
  }
if (action.type == 'GetTotal') {
let { total, amount } = state.data.reduce(
  (cartTotal,cartItem) => {
    const { price, amount } = cartItem;
    const Auditor=price*amount
    cartTotal.total+=Auditor
    cartTotal.amount+=amount
    console.log(cartTotal);
return cartTotal
  },
 
  {
    total: 0,
    amount: 0,
  }
);
total=parseFloat(total.toFixed(2))
return {...state,total,amount}
}
if (action.type == 'Loading') {
return {...state,loading:true}
}
if (action.type == 'Responsed') {
return {...state,loading:false,data:action.payload}
}
  return state;
};

export default Reducer;
