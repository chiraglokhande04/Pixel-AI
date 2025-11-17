// LessonFields.js
import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

const LessonFields = ({ moduleIndex }) => {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `curriculum.${moduleIndex}.lessons`
  });

  return (
    <div>
      {fields.map((lessonField, lessonIndex) => (
        <div key={lessonField.id} className="mb-4 p-3 bg-white rounded-md shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Lesson Title</label>
              <input
                {...register(`curriculum.${moduleIndex}.lessons.${lessonIndex}.title`)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Duration</label>
              <input
                {...register(`curriculum.${moduleIndex}.lessons.${lessonIndex}.duration`)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="e.g., 15min"
              />
            </div>
          </div>

          <div className="mt-2 flex items-center space-x-4">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                {...register(`curriculum.${moduleIndex}.lessons.${lessonIndex}.locked`)}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 mr-2"
              />
              Locked
            </label>

            <label className="flex items-center text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                {...register(`curriculum.${moduleIndex}.lessons.${lessonIndex}.isTest`)}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 mr-2"
              />
              Is Test
            </label>
          </div>

          <button
            type="button"
            onClick={() => remove(lessonIndex)}
            className="mt-2 text-red-500 hover:text-red-700 text-sm"
          >
            Remove Lesson
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ title: '', duration: '', locked: false, isTest: false })}
        className="mt-2 px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm"
      >
        Add Lesson
      </button>
    </div>
  );
};

export default LessonFields;
