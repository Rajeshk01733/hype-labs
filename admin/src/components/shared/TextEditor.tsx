import React, { useMemo } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

type TextEditorProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
};

export default function TextEditor({
  label,
  value,
  onChange,
}: TextEditorProps) {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        ["blockquote", "code-block"],
        ["clean"],
      ],
    }),
    [],
  );

  const formats = useMemo(
    () => [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "list",
      "bullet",
      "align",
      "blockquote",
      "code-block",
    ],
    [],
  );

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium">
          {label}
        </label>
      )}

      <ReactQuill
        theme="snow"
        value={value || ""}
        onChange={(content) =>
          onChange(content)
        }
        modules={modules}
        formats={formats}
        className="bg-card border-input rounded-md"
      />
    </div>
  );
}