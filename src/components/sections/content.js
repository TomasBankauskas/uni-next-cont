import ReactMarkdown from 'react-markdown';
import Dots from '../svgs/dots';

export default function Content(props) {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        {props.badge && (
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {props.badge}
            </p>
          </div>
        )}
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
      <div className="max-w-screen-lg sm:mx-auto prose">
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
    </div>
  );
}
