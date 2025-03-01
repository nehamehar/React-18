import React from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption =[], //our countries list
    selectCurrency ="usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="inline-block mb-2 text-black/40">
                    {label} 
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled ={amountDisable}
                    value = {amount}
                    onChange={(e) => onAmountChange && onAmountChange (Number (e.target.value))} // as we use onAmountChange && onAmountChange because if the user does not give any value the code is not crash, Number (e.target.value) because we want the valsue is to be number and the event aleays give string so we use number 
                />
            </div>
            <div className="flex flex-wrap justify-end w-1/2 text-right">
                <p className="w-full mb-2 text-black/40">Currency Type</p>
                <select
                    className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable} 
                >
                    
                        {currencyOption.map((Currency) => (
                            <option key={Currency} value={Currency}>
                                {Currency}
                            </option>
                        ))}
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
