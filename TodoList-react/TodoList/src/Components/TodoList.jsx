import { useState } from "react";

import { motion } from "framer-motion";
import React from "react";
import AuroraBackground from "./background";

function TodoList() {
    const [inputText, setInputText] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleInput = (e) => {
        setInputText(e.target.value);
    };

    const handleDelete = (index) =>{
      let updatedTask = tasks.filter((task,idx) => idx !== index)
      setTasks(updatedTask)
    }

    const handleAddTask = () => {
        if (inputText.trim() !== "") {
            setTasks([...tasks, inputText]);
            setInputText("");
        }
    };
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Todo list
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInput}
                    placeholder="Enter task"
                    className="border border-gray-500 text-xl p-3 text-black"
                />
                <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-2 ml-4" onClick={handleAddTask}>Add</button>

                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} className="text-black" >
                            {task} <button onClick={() => handleDelete(index)}>X</button>
                        </li>
                    ))}
                </ul>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

export default TodoList;