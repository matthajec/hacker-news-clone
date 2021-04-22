import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <p>Page Not Found. Go to <Link to="/">Home</Link></p>
  );
}