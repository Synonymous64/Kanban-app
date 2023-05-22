import { useState } from "react";

const AddEditTaskModal = ({ type, device, setOpenAddEditTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
        <div
            className={device === 'mobile' ?
                'py-6 px-6 pb-40 absolute overflow-y-scroll left-0 flex right-0 bottom-[-100vh] top-0 bg-[#00000080]'
                :
                'py-6 px-6 pb-40 absolute overflow-y-scroll left-0 flex right-0 bottom-0 top-0 bg-[#00000080]'
            }
            onClick={(e) => {
                if (e.target !== e.currentTarget) return;
                setOpenAddEditTask(false);
            }}
        >
            {/* Modal Section */}
            <div className="scrollbar-hide overflow-y-scroll max-h-[95vh] my-auto bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto w-full px-8 py-8 rounded-xl">
                <h3 className="text-lg">
                    {type === 'edit' ? 'Edit' : 'Add New'} Task
                </h3>
                {/* Task Name */}
                <div className="mt-8 flex flex-col space-y-1">
                    <label className="text-sm dark:text-white text-gray-500">
                        Task Name
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-transparent px-4 py-2 outline-none focus:border-0 rounded-md text-sm border border-gray-600 focus:outline-[#635fc7] ring-0"
                        placeholder="e.g Take coffee break"
                    />
                </div>

                {/* description */}
                <div className="mt-8 flex flex-col space-y-1">
                    <label className="text-sm dark:text-white text-gray-500">
                        Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="bg-transparent px-4 py-2 outline-none focus:border-0 rounded-md text-sm border min-h-[200px] border-gray-600 focus:outline-[#635fc7] ring-0"
                        placeholder="e.g It's always good to take a break. This 15 minute break will recharge the batteries a little"
                    />
                </div>
            </div>
        </div>
    )
}

export default AddEditTaskModal;