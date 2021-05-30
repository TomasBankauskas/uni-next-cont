import Link from 'next/link';
import Bolt from '../svgs/bolt';
import Dots from '../svgs/dots';

export default function Hero(props) {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <a href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <Bolt size={10} />
            </div>
          </a>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            {props.title && (
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <Dots />
                  <span className="relative">{props.title}</span>
                </span>
              </h2>
            )}
            {props.subtitle && <p className="text-base text-gray-700 md:text-lg">{props.subtitle}</p>}
          </div>
          {props.action && (
            <div>
              <Link href={props.action.url}>
                <a
                  aria-label={props.action.alt}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  {props.action.label}
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
