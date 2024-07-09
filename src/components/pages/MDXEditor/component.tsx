"use client";
// InitializedMDXEditor.tsx
import type { ForwardedRef } from "react";

import {
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
} from "@mdxeditor/editor";

import { ALL_PLUGINS } from "@/components/pages/MDXEditor/plugins";

// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: {
  editorRef: ForwardedRef<MDXEditorMethods> | null;
} & MDXEditorProps) {
  return (
    <>
      <MDXEditor plugins={ALL_PLUGINS} {...props} ref={editorRef} />
    </>
  );
}
