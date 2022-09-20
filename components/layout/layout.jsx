const Layout = () => {
    return (
         <div>
            {/* Positioning  */}
            <div className="relative w-1/2 h-12 bg-red-200">
                <p>Parent ELement</p>
                <div className="absolute bottom-0 right-0 bg-red-500">
                    <p>Absolute</p>
                </div>
            </div>

            {/* Top left corner  */}
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300"></div>
            </div>

            {/* Top right corner  */}

            <div className="relative h-32 w-32 bg-yellow-100 mt-12">
                <div className="absolute right-0 top-0 h-16 w-16 bg-yellow-500"></div>
            </div>

            {/* Bottom left corner  */}

            <div className="relative h-32 w-32 bg-yellow-100 mt-12">
                <div className="absolute left-0 bottom-0 h-16 w-16 bg-yellow-500"></div>
            </div>

            {/* Bottom right corner  */}

            <div className="relative h-32 w-32 bg-yellow-100 mt-12">
                <div className="absolute right-0 bottom-0 h-16 w-16 bg-yellow-500"></div>
            </div>

            {/* Span top edge  */}

            <div className="relative h-32 w-32 bg-yellow-100 mt-12">
                <div className="absolute inset-x-0 top-0 h-16 bg-yellow-500"></div>
            </div>

            {/* Span left edge  */}

            <div className="relative h-32 w-32 bg-yellow-100 mt-12">
                <div className="absolute inset-y-0 left-0 w-16 bg-yellow-500"></div>
            </div>

            {/* Span right edge  */}

            <div className="relative h-32 w-32 bg-yellow-100 mt-12">
                <div className="absolute inset-y-0 right-0 w-16 bg-yellow-500"></div>
            </div>

            {/* Span bottom edge  */}

            <div className="relative h-32 w-32 bg-yellow-100 mt-12">
                <div className="absolute inset-x-0 bottom-0 h-16 bg-yellow-500"></div>
            </div>

            {/* Display Classes  */}

            <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem <span className="inline font-bold">This is inline</span>laboriosam libero molestiae recusandae accusantium
            voluptates? Expedita dignissimos amet eveniet dolore nobis odio a
            sunt, maiores quasi. <span className="inline-block font-bold">This is inline block</span>Modi amet quos dolores!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem <span className="block font-bold">This is block</span>laboriosam libero molestiae recusandae accusantium
            voluptates? Expedita <span className="hidden">This is hidden</span> dignissimos amet eveniet dolore nobis odio a
            sunt, maiores quasi. Modi amet quos dolores!
            </div>

            {/* Z-Index  */}
            {/* z index is a placement an item is away from you or the screen */}
            <div className="relative h-36">
                <div className="absolute left-10 w-24 h-24 bg-blue-300 z-40">1</div>
                <div className="absolute left-20 w-24 h-24 bg-blue-400 ">2</div>
                <div className="absolute left-40 w-24 h-24 bg-blue-500 z-10">3</div>
                <div className="absolute left-60 w-24 h-24 bg-blue-600 z-20">4</div>
                <div className="absolute left-80 w-24 h-24 bg-blue-700 z-30">5</div>
            </div>

            {/* Floats  */}
            {/* float-right */}
            <div className="w-1/2">
                <img className="h-48 w-48 float-right" src="/images/img1.jpg" alt="" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Quae natus optio iste autem 
                    eaque, ullam sint laboriosam voluptatum fugiat 
                    tenetur tempore nulla dicta asperiores ratione 
                    soluta impedit veniam molestiae repellendus.
                </p>
            </div>
            
            {/* float-left */}
            <div className="w-1/2 mt-12">
                <img className="h-48 w-48 float-left" src="/images/img1.jpg" alt="" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Quae natus optio iste autem 
                    eaque, ullam sint laboriosam voluptatum fugiat 
                    tenetur tempore nulla dicta asperiores ratione 
                    soluta impedit veniam molestiae repellendus.
                </p>
            </div>
         </div>

    )
}

export default Layout

//  Position Classes
//       static	    position: static;
//       fixed	      position: fixed;
//       absolute	  position: absolute;
//       relative	  position: relative;
//       sticky	    position: sticky;
    

//  Display Classes
//       block	            display: block;
//       inline-block	    display: inline-block;
//       inline	          display: inline;
//       flex	            display: flex;
//       inline-flex	      display: inline-flex;
//       table	            display: table;
//       grid	            display: grid;
//       inline-grid	      display: inline-grid;
//       contents	        display: contents;
//       list-item	        display: list-item;
//       hidden	          display: none;
    

//  Z-Index
//       z-0	    z-index: 0;
//       z-10	  z-index: 10;
//       z-20	  z-index: 20;
//       z-30	  z-index: 30;
//       z-40	  z-index: 40;
//       z-50	  z-index: 50;
//       z-auto	z-index: auto;
    

//  Float
//       float-right	  float: right;
//       float-left	  float: left;
//       float-none	  float: none;
    