import { Link } from 'react-router';

export const GroupTitle = ({title, linkText, to}: {title: string, linkText: string, to: string}) => {
  return (
    <div className="flex items-center justify-between w-full h-10">
      <h2 className="text-xl">{title}</h2>
      <Link
        className="underline transition-colors hover:text-accent "
        to={to}
      >
        {linkText}
      </Link>
    </div>
  );
}
