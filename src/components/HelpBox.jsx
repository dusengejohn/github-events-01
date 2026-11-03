import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}
// Add prop types for the HelpBox component
HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
