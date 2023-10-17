import {people} from '../utils/constants'
import {shuffle} from "../utils/utils";

const teamMembers = shuffle(people)

export default function Team({handleCheckboxClick}) {
  function handleClick(person) {
    handleCheckboxClick(person)
  }

  return (
    <ul
      style={{marginTop: '400px'}}
      className="mx-auto max-w-2xl gap-x-8 gap-y-16 text-center lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
    >
      {teamMembers.map((person) => (
        <li
          key={person.name}
          onClick={() => handleClick(person)}
          className={`${
            person.done ? 'bg-gray-800' : 'hover:bg-blue-50'
          } rounded p-1.5 hover:cursor-pointer block my-1.5`}
        >
          <div className="flex justify-center items-center">
            {
              person.imageUrl ? (
                <div className='flex items-center justify-center'>
                  <img className='h-5' src={`${person.imageUrl}`} alt=''/>
                </div>
              ) : null
            }
            <span
              className={`ml-3 text-md font-semibold leading-7 tracking-tight ${
                person.done ? 'text-white' : 'text-gray-900'
              }`}
            >
            {person.name}
          </span>
          </div>
          <p className="text-xs uppercase text-gray-900">{person.role}</p>
        </li>
      ))}
    </ul>
  )
}
