

export default function Short_Bio() {
  return (
    <div className="center">
      <div className="short-bio">
        <h1>Professional summary</h1>
        <p>Now, let's add a summary.</p>
        <textarea id="summary" cols={60} rows={10} style={{maxWidth:"90%"}}></textarea>
      </div>
    </div>
  );
}
