import { Link } from 'react-router-dom';

// TODO implement Welcome Page
export default function WelcomePage() {
  return (
    <main>
      Welcome Page <Link to={'/some-bad-rout'}>Bad rout</Link>
    </main>
  );
}
