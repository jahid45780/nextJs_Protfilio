const Skill = () => {
    return (
        <div id="skills" >
            <h1 className=" text-4xl text-center font-bold" > My Skills </h1>
            <p className=" text-center text-lg font-semibold mt-2" > Programming is a skill best acquired by practice and example rather than from books</p>
          
            <section className=" grid lg:grid-cols-3 grid-cols-1  text-center mx-auto mt-4" >
          
        <div>
        <label className="text-lime-500 font-bold mb-2 block" for="file">HTML</label>
        <progress className=" lg:w-72 h-6 bg-gray-200 border border-gray-300 rounded-lg" id="file" value="100" max="100"> 99% </progress>
        </div>

        <div>
        <label className="text-lime-500 font-bold mb-2 block" for="file">CSS</label>
        <progress className=" lg:w-72  h-6 bg-gray-200 border border-gray-300 rounded-lg" id="file" value="98" max="100"> 98% </progress>
        </div>

        <div>
        <label className="text-lime-500 font-bold mb-2 block" for="file">Tailwind CSS</label>
        <progress className=" lg:w-72  h-6 bg-gray-200 border border-gray-300 rounded-lg" id="file" value="96" max="100"> 96% </progress>
        </div>


        <div>
        <label className="text-lime-500 font-bold mb-2 block" for="file">JavaScript</label>
        <progress className=" lg:w-72  h-6 bg-gray-200 border border-gray-300 rounded-lg" id="file" value="95" max="100"> 95% </progress>
        </div>


        <div>
        <label className="text-lime-500 font-bold mb-2 block" for="file">React JS</label>
        <progress className=" lg:w-72  h-6 bg-gray-200 border border-gray-300 rounded-lg" id="file" value="90" max="100"> 90% </progress>
        </div>

        <div>
        <label className="text-lime-500 font-bold mb-2 block" for="file">Next JS</label>
        <progress className=" lg:w-72  h-6 bg-gray-200 border border-gray-300 rounded-lg" id="file" value="50" max="100"> 50% </progress>
        </div>


        <div>
        <label className="text-lime-500 font-bold mb-2 block" for="file"> Firebase </label>
        <progress className="  lg:w-72  h-6 bg-gray-200 border border-gray-300 rounded-lg" id="file" value="80" max="100"> 80% </progress>
        </div>


        <div>
        <label className="text-lime-500 font-bold mb-2 block" for="file">Node Js </label>
        <progress className=" lg:w-72  h-6 bg-gray-200 border border-gray-300 rounded-lg" id="file" value="55" max="100"> 55% </progress>
        </div>

        <div>
        <label className="text-lime-500 font-bold mb-2 block" for="file">Express Js</label>
        <progress className=" lg:w-72  h-6 bg-gray-200 border border-gray-300 rounded-lg" id="file" value="68" max="100"> % 68</progress>
        </div>

        <div>
        <label className="text-lime-500 font-bold mb-2 block" for="file">MongoDB</label>
        <progress className=" lg:w-72  h-6 bg-gray-200 border border-gray-300 rounded-lg" id="file" value="63" max="100"> 63% </progress>
        </div>


        <div>
        <label className="text-lime-500 font-bold mb-2 block" for="file">Figma</label>
        <progress className=" lg:w-72  h-6 bg-gray-200 border border-gray-300 rounded-lg" id="file" value="99" max="100"> 99% </progress>
        </div>

        <div>
        <label className="text-lime-500 font-bold mb-2 block" for="file"> Canva </label>
        <progress className=" lg:w-72  h-6 bg-gray-200 border border-gray-300 rounded-lg" id="file" value="98" max="100"> 98% </progress>
        </div>
          
            </section>
        </div>
    );
};

export default Skill;