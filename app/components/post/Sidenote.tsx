import postStyles from "@/styles/post.module.scss";

export default function Sidenote({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  // Generate custom id if none is provided
  if (!id) {
    id = Math.random().toString(36).substring(7);
  }

  return (
    <div style={{
      display: "inline",
    }}>
      <label htmlFor={`sn-`+id} className={`${postStyles['sidenote-number']} ${postStyles["margin-toggle"]}`}>
        
      </label>
      <input
        type="checkbox"
        id={`sn-`+id} 
        className={postStyles["margin-toggle"]}
      />
      <span className={postStyles["sidenote"]}>{children}</span>
    </div>
  );
}
