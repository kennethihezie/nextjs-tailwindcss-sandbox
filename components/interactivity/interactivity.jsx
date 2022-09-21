import Link from "next/link"

const Interactivity = () => {
    return (
        <div>
             {/* Hover State Styling  */}
             <button className="bg-black text-white py-3 px-5 rounded-lg m-3 hover:bg-orange-500 hover:text-purple-500">Hover</button>

             {/* Focus State Styling  */}

             <button className="bg-black text-white py-3 px-5 rounded-lg m-3 focus:bg-green-500 focus:text-pink-500">Focus</button>

             {/* Active State Styling  */}
             {/* hold-down button to see effect */}
             <button className="bg-black text-white py-3 px-5 rounded-lg m-3 active:bg-yellow-500 active:text-green-500">Active</button>

             {/* Styling based on parent state  */}

            <Link href=''>
             <a className="group block max-w-xs mx-auto rounded-lg p-6 bg-white shadow-lg space-y-3 hover:bg-sky-500">
                <h3 className="group-hover:text-white">Card title</h3>
                <p className="group-hover:text-white">This is the card text</p>
             </a>
            </Link>

             {/* Pseudo Classes  */}

             <ul>
                <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-300">Item 1</li>
                <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-300">Item 2</li>
                <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-300">Item 3</li>
                <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-300">Item 4</li>
                <li className="first:bg-red-200 even:bg-green-500 odd:bg-orange-300">Item 5</li>
             </ul>

             {/* Appearance  */}
             {/* Use appearance-none to reset any browser specific styling on an element. This utility is often used when creating custom form components.  */}
             <select className="mt-4 appearance-none">
                <option value="yes">yes</option>
                <option value="no">No</option>
             </select>

             <br />
             {/* Cursor  */}

             <button className="bg-black text-white py-3 rounded-lg m-5 p-2">Submit</button>
             <p className="cursor-progress">Hello</p>
             <div className="select-none">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
             <div className="select-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
             <div className="select-all">Lorem ipsum dolor sit amet consectetur adipisicing elit.!</div>
             <div className="select-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>

             {/* Resize  */}

             {/* User Select  */}

             {/* Smooth Scroll Example  */}
             <a href="#item" className="block my-6 text-blue-400">Go to Item</a>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusantium praesentium placeat iure ut sequi voluptatum ullam similique cumque deleniti ea quis asperiores ab, ducimus odit ex animi incidunt, eos expedita ratione voluptate. Blanditiis maiores accusantium ad quasi at, sit iste tenetur! Iure obcaecati, dolor quas dicta enim odio labore similique aut nam a earum! Sint, nemo! Animi saepe atque tenetur dolore exercitationem nobis dolorem vel blanditiis mollitia. Magni vitae veniam, sapiente quae necessitatibus neque est veritatis, explicabo corporis quidem cupiditate tempore atque cum dolor cumque, dolorum laboriosam accusantium impedit a consectetur ad. Excepturi dolorem similique veniam ipsum at recusandae voluptatem eum itaque tenetur blanditiis iure rerum, velit adipisci quisquam reprehenderit quos alias modi. Fuga cupiditate veniam provident libero adipisci fugit fugiat laboriosam eius culpa temporibus. Itaque ratione expedita aliquam sed recusandae ad provident, perspiciatis beatae voluptates sint. Officiis harum doloremque nobis laboriosam corporis molestiae quae, veritatis, quod sapiente at incidunt! Autem explicabo, fugit culpa deserunt beatae ducimus. Quis doloremque rem, natus, dolorem asperiores laborum ex praesentium illo, facere officiis sed itaque? Blanditiis similique quam molestias dolor quis sunt dolores cum reprehenderit quidem fuga, ratione vero sed aut maiores dignissimos numquam? Dignissimos nostrum dolor aliquam temporibus vitae, esse natus. Voluptatem laborum sit nesciunt deleniti at quasi doloribus sint veritatis vitae facere culpa, ex quisquam cumque! Laudantium sint corporis, sequi adipisci dolores praesentium, minima iusto non voluptatibus corrupti illum laborum maiores veritatis, pariatur cum. Expedita unde provident animi praesentium reiciendis vitae enim sunt aperiam possimus, natus fuga tenetur ducimus corporis non placeat autem incidunt voluptatum quam qui veritatis? Quia, dolor. Illo quam rerum maxime, dolorum cumque quas quo, dolores iure in facere eaque voluptate quibusdam beatae temporibus explicabo minus commodi, et suscipit consequatur doloremque eius amet delectus autem ratione! Nam molestias ullam repellat voluptatibus veniam ab cumque quod ut hic aperiam blanditiis asperiores quidem deserunt consectetur qui nisi, tenetur aspernatur dolorem illum iusto. Veniam quo fugit animi temporibus provident nesciunt ut laboriosam inventore consequatur autem iste, similique, suscipit adipisci commodi! Eveniet saepe laboriosam sunt reprehenderit perferendis. Impedit nesciunt dicta quia beatae optio maxime quibusdam dolorem minima, est itaque provident vitae repudiandae? Voluptatem impedit hic quasi inventore! Sapiente, facere non officiis sed voluptates distinctio cupiditate harum minima nulla magnam praesentium! Dolor necessitatibus ratione aliquid, asperiores reprehenderit ducimus laudantium laborum quibusdam, eos cumque ab aliquam nostrum accusamus voluptates nobis fuga explicabo, suscipit quod maxime quis iure illum animi possimus delectus? In, sed ipsa.</p>
            <div id="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus doloremque, neque, culpa voluptatibus incidunt iusto maiores quam accusamus est nam voluptas. Commodi consectetur iure itaque officia ea modi qui cumque id adipisci? Nemo voluptas, enim aut autem nesciunt rerum voluptatem, assumenda at sunt labore atque nisi repellendus sit dignissimos repellat!</div>
        </div>
    )
}

export default Interactivity

//  Cursor
//   cursor-auto	          cursor: auto;
//   cursor-default	      cursor: default;
//   cursor-pointer	      cursor: pointer;
//   cursor-wait	          cursor: wait;
//   cursor-text	          cursor: text;
//   cursor-move	          cursor: move;
//   cursor-help	          cursor: help;
//   cursor-not-allowed	  cursor: not-allowed;
//   cursor-none	          cursor: none;
//   cursor-context-menu	  cursor: context-menu;
//   cursor-progress	      cursor: progress;
//   cursor-cell	          cursor: cell;
//   cursor-crosshair	    cursor: crosshair;
//   cursor-vertical-text	cursor: vertical-text;
//   cursor-alias	        cursor: alias;
//   cursor-copy	          cursor: copy;
//   cursor-no-drop	      cursor: no-drop;
//   cursor-grab	          cursor: grab;
//   cursor-grabbing	      cursor: grabbing;
//   cursor-all-scroll	    cursor: all-scroll;
//   cursor-col-resize	    cursor: col-resize;
//   cursor-row-resize	    cursor: row-resize;
//   cursor-n-resize	      cursor: n-resize;
//   cursor-e-resize	      cursor: e-resize;
//   cursor-s-resize	      cursor: s-resize;
//   cursor-w-resize	      cursor: w-resize;
//   cursor-ne-resize	    cursor: ne-resize;
//   cursor-nw-resize	    cursor: nw-resize;
//   cursor-se-resize	    cursor: se-resize;
//   cursor-sw-resize	    cursor: sw-resize;
//   cursor-ew-resize	    cursor: ew-resize;
//   cursor-ns-resize	    cursor: ns-resize;
//   cursor-nesw-resize	  cursor: nesw-resize;
//   cursor-nwse-resize	  cursor: nwse-resize;
//   cursor-zoom-in	      cursor: zoom-in;
//   cursor-zoom-out	      cursor: zoom-out;
