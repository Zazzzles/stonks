import { useState, useEffect } from 'react';

export default () => {
  const [lastPurchase, setLastPurchase] = useState({
    amount: 0,
    purchaseValue: 0,
    openedAt: 0,
    closedAt: 0,
  });

  const [purchase, setPurchase] = useState({
    amount: 0,
    purchaseValue: 0,
    openedAt: 0,
  });

  const [purchaseHistory, setPurchaseHistory] = useState([]);

  const doSell = (currentValue) => {
    setLastPurchase({
      ...purchase,
      closedAt: currentValue * purchase.amount,
    });

    setPurchaseHistory([
      {
        ...purchase,
        closedAt: currentValue * purchase.amount,
        positive: purchase.purchaseValue < currentValue * purchase.amount,
      },
      ...purchaseHistory,
    ]);

    setPurchase({
      amount: 0,
      purchaseValue: 0,
      openedAt: 0,
    });
  };

  return {
    doSell,
    setPurchase,
    purchase,
    lastPurchase,
    purchaseHistory,
  };
};
