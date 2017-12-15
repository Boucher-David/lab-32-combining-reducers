import initialState from '../lib/initialState';
  
  const categoryReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'CATEGORY_CREATE':
          let newState = {...state};

          newState[action.category.id] = action.category;
          return newState;

        case 'CATEGORY_UPDATE':

          let updateState = {...state};

          updateState[action.content.id].name = action.content.text;
          return updateState;

        
        case 'CATEGORY_DESTROY':
          let thisState = {...state};

          delete thisState[action.id];
 
          return thisState;

        case 'CATEGORY_TOGGLE':
          let toggleState = {...state};
          toggleState[action.id].updating = !toggleState[action.id].updating;
          return toggleState;

        case 'EXPENSE_CREATE':
        let addExpense = {...state};

        addExpense[action.expense.categoryID].expenses[action.expense.id] = action.expense;
        return addExpense;



        default:
            return state;
    }
  }

  export default categoryReducer;