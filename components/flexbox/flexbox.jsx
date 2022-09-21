const FlexBox = () => {
    return (
        <div className="mt-6">
          {/* Flex and alignment  */}
          <div className="flex flex-col md:flex-row">
          <div className="p-10 border border-blue-300">01</div>
          <div className="p-10 border border-blue-300">02</div>
          <div className="p-10 border border-blue-300">03</div>
          <div className="p-10 border border-blue-300">04</div>
          </div>

          <div className="flex h-72 w-full bg-gray-100 mt-6">
          <div className="p-10 border border-blue-300">01</div>
          <div className="p-10 border border-blue-300">02</div>
          <div className="p-10 border border-blue-300">03</div>
          <div className="p-10 border border-blue-300">04</div>
          </div>

          <div className="flex items-start h-72 w-full bg-gray-100 mt-6">
          <div className="p-10 border border-blue-300">01</div>
          <div className="p-10 border border-blue-300">02</div>
          <div className="p-10 border border-blue-300">03</div>
          <div className="p-10 border border-blue-300">04</div>
          </div>
          
          <div className="flex items-center h-72 w-full bg-gray-100 mt-6">
          <div className="p-10 border border-blue-300">01</div>
          <div className="p-10 border border-blue-300">02</div>
          <div className="p-10 border border-blue-300">03</div>
          <div className="p-10 border border-blue-300">04</div>
          </div>

          <div className="flex items-end h-72 w-full bg-gray-100 mt-6">
          <div className="p-10 border border-blue-300">01</div>
          <div className="p-10 border border-blue-300">02</div>
          <div className="p-10 border border-blue-300">03</div>
          <div className="p-10 border border-blue-300">04</div>
          </div>

          {/* justify is the same as mainAxisALingment in flutter. */}

          <div className="flex items-end h-72 w-full bg-gray-100 mt-6 justify-center">
          <div className="p-10 border border-blue-300">01</div>
          <div className="p-10 border border-blue-300">02</div>
          <div className="p-10 border border-blue-300">03</div>
          <div className="p-10 border border-blue-300">04</div>
          </div>

          <div className="flex items-end h-72 w-full bg-gray-100 mt-6 justify-end">
          <div className="p-10 border border-blue-300">01</div>
          <div className="p-10 border border-blue-300">02</div>
          <div className="p-10 border border-blue-300">03</div>
          <div className="p-10 border border-blue-300">04</div>
          </div>

          <div className="flex items-end h-72 w-full bg-gray-100 mt-6 justify-start">
          <div className="p-10 border border-blue-300">01</div>
          <div className="p-10 border border-blue-300">02</div>
          <div className="p-10 border border-blue-300">03</div>
          <div className="p-10 border border-blue-300">04</div>
          </div>

          
          <div className="flex items-end h-72 w-full bg-gray-100 mt-6 justify-around">
          <div className="p-10 border border-blue-300">01</div>
          <div className="p-10 border border-blue-300">02</div>
          <div className="p-10 border border-blue-300">03</div>
          <div className="p-10 border border-blue-300">04</div>
          </div>

          <div className="flex items-end h-72 w-full bg-gray-100 mt-6 justify-between">
          <div className="p-10 border border-blue-300">01</div>
          <div className="p-10 border border-blue-300">02</div>
          <div className="p-10 border border-blue-300">03</div>
          <div className="p-10 border border-blue-300">04</div>
          </div>

          <div className="flex flex-wrap items-end h-72 w-full bg-gray-100 mt-6 justify-between">
          <div className="p-10 border border-blue-300">01</div>
          <div className="p-10 border border-blue-300">02</div>
          <div className="p-10 border border-blue-300">03</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          </div>
          
          {/* Flex Column, Gap and Order  */}

          <div className="flex flex-col gap-4 items-center h-72 w-full bg-gray-100 mt-24 justify-between">
          <div className="order-3 p-10 border border-blue-300">01</div>
          <div className="order-2 p-10 border border-blue-300">02</div>
          <div className="order-4 p-10 border border-blue-300">03</div>
          <div className="order-1 p-10 border border-blue-300">04</div>
          </div>

         {/* Grow and shrink  */}

         <div className="flex w-full bg-gray-100 mt-24">
          <div className="flex-initial w-64 p-10 border border-blue-300">01</div>
          <div className="flex-none w-64 first-letter:p-10 border border-blue-300">02</div>
          <div className="flex-auto w-64 p-10 border border-blue-300">03</div>
          <div className="flex-1 w-64 p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          <div className="p-10 border border-blue-300">04</div>
          </div>

          <div className="flex">
            <div className="flex-1 bg-blue-500">Hello</div>
            <div className="flex-1 bg-blue-500">Hello</div>
            <div className="flex-1 bg-blue-500">Hello</div>
          </div>
        </div>
    )
}

export default FlexBox

//  Justify Content
//       justify-start	      justify-content: flex-start;
//       justify-end	        justify-content: flex-end;
//       justify-center	    justify-content: center;
//       justify-between	    justify-content: space-between;
//       justify-around	    justify-content: space-around;
//       justify-evenly	    justify-content: space-evenly;
    

 
    //   items-start	align-items: flex-start;
    //   items-end	align-items: flex-end;
    //   items-center	align-items: center;
    //   items-baseline	align-items: baseline;
    //   items-stretch	align-items: stretch;
     

//  Flex Direction
//       flex-row	        flex-direction: row;
//       flex-row-reverse	flex-direction: row-reverse;
//       flex-col	        flex-direction: column;
//       flex-col-reverse	flex-direction: column-reverse;
    

 
//       flex-wrap	        flex-wrap: wrap;
//       flex-wrap-reverse	flex-wrap: wrap-reverse;
//       flex-nowrap	      flex-wrap: nowrap;
     

//  Flex Properties
//       flex-none	    flex: none;     
//       Prevent item from growing or shrinking

//       flex-initial	flex: 0 1 auto; 
//       Allow item to shrink but not grow, taking into account its initial size

//       flex-auto	    flex: 1 1 auto; 
//       Allow item to grow and shrink, taking into account its initial size

//       flex-1	      flex: 1 1 0%;   
//       Allow item to grow and shrink as needed, ignoring its initial size
    