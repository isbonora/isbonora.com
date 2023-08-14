import postStyles from "@/styles/post.module.scss";

export default function Marginnote({
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
      <label htmlFor={`mn-`+id} className={postStyles["margin-toggle"]}>

      </label>
      <input
        type="checkbox"
        id={`mn-`+id} 
        className={postStyles["margin-toggle"]}
      />
      <span className={postStyles["marginnote"]}>{children}</span>
    </div>
  );
}
