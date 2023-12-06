import { useState } from 'react';

type FormProps = {
  onSubmit: (email: string, pass: string) => void;
};

export default function Form({ onSubmit }: FormProps) {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, pass);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={pass}
        placeholder="password"
        onChange={(e) => setPass(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
