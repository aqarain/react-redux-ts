import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'store';

export const App = () => {
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);

  return (
    <div>
      <h1>{amount}</h1>
      <button
        onClick={() => {
          depositMoney(1000);
        }}
      >
        Deposit
      </button>
      <button
        onClick={() => {
          withdrawMoney(1000);
        }}
      >
        Withdraw
      </button>
      <button
        onClick={() => {
          bankrupt();
        }}
      >
        Bankrupt
      </button>
    </div>
  );
};
