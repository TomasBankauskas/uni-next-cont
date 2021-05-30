import Link from 'next/link';
import Bolt from '../svgs/bolt';
import Dots from '../svgs/dots';

export default function Features(props) {
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
      {props.features && props.features.length > 0 && (
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {props.features.map((feature, idx) => (
            <div key={idx} className="flex flex-col justify-between p-5 border rounded shadow-sm">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                  <Bolt size={12} />
                </div>
                <h6 className="mb-2 font-semibold leading-5">{feature.title}</h6>
                <p className="mb-3 text-sm text-gray-900">{feature.subtitle}</p>
              </div>
              {feature.action && (
                <Link href={feature.action.url}>
                  <a
                    aria-label={feature.action.alt}
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    {feature.action.label}
                  </a>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
