"use client";
import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { LeafDirective } from "mdast-util-directive";
import {
  diffSourcePlugin,
  markdownShortcutPlugin,
  AdmonitionDirectiveDescriptor,
  DirectiveDescriptor,
  directivesPlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  SandpackConfig,
  codeBlockPlugin,
  codeMirrorPlugin,
  sandpackPlugin,
  KitchenSinkToolbar,
  DialogButton,
  insertDirective$,
  usePublisher,
} from "@mdxeditor/editor";

import { components } from "@/components/pages/admin/ui/blog/components";

const defaultSnippetContent = `
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
`.trim();

//Sandpack Config
export const sandpackConfig: SandpackConfig = {
  defaultPreset: "react",
  presets: [
    {
      label: "React",
      name: "react",
      meta: "live react",
      sandpackTemplate: "react-ts",
      sandpackTheme: "light",
      snippetFileName: "/App.tsx",
      snippetLanguage: "tsx",
      initialSnippetContent: defaultSnippetContent,
    },
    {
      label: "Virtuoso",
      name: "virtuoso",
      meta: "live virtuoso",
      sandpackTemplate: "react-ts",
      sandpackTheme: "light",
      snippetFileName: "/App.tsx",
      initialSnippetContent: defaultSnippetContent,
      dependencies: {
        "react-virtuoso": "latest",
        "@ngneat/falso": "latest",
      },
    },
  ],
};

//Image upload
export async function expressImageUploadHandler(image: File) {
  const formData = new FormData();
  formData.append("image", image);
  const response = await fetch("/uploads/new", {
    method: "POST",
    body: formData,
  });
  const json = (await response.json()) as { url: string };
  return json.url;
}

// Embed
interface YoutubeDirectiveNode extends LeafDirective {
  name: "youtube";
  attributes: { id: string };
}

//Defined Youtube Video
export const YoutubeDirectiveDescriptor: DirectiveDescriptor<YoutubeDirectiveNode> =
  {
    name: "youtube",
    type: "leafDirective",
    testNode(node) {
      return node.name === "youtube";
    },
    attributes: ["id"],
    hasChildren: false,
    Editor: ({ mdastNode, lexicalNode, parentEditor }) => {
      return (
        <div className="flex items-start">
          {components.youtube({ id: mdastNode.attributes.id })}
          <button
            onClick={() => {
              parentEditor.update(() => {
                lexicalNode.selectNext();
                lexicalNode.remove();
              });
            }}
          >
            <MdOutlineDeleteForever className="size-6" />
          </button>
        </div>
      );
    },
  };

//Youtube Video Component
const YouTubeButton = () => {
  // grab the insertDirective action (a.k.a. publisher) from the
  // state management system of the directivesPlugin
  const insertDirective = usePublisher(insertDirective$);

  return (
    <DialogButton
      tooltipTitle="Insert Youtube video"
      submitButtonTitle="Insert video"
      dialogInputPlaceholder="Paste the youtube video URL"
      buttonContent={<FaYoutube className="size-6" />}
      onSubmit={(url) => {
        const videoId = new URL(url).searchParams.get("v");
        if (videoId) {
          insertDirective({
            name: "youtube",
            type: "leafDirective",
            attributes: { id: videoId },
            children: [],
          } as LeafDirective);
        } else {
          alert("Invalid YouTube URL");
        }
      }}
    />
  );
};

//Plugins
export const ALL_PLUGINS = [
  //Toolbar plugins
  toolbarPlugin({
    toolbarContents: () => [<KitchenSinkToolbar />, <YouTubeButton />],
  }),

  //Basic plugins
  listsPlugin(),
  quotePlugin(),
  headingsPlugin({ allowedHeadingLevels: [1, 2, 3] }),
  linkPlugin(),
  linkDialogPlugin(),
  tablePlugin(),
  thematicBreakPlugin(),
  frontmatterPlugin(),
  imagePlugin({
    imageAutocompleteSuggestions: ["https://via.placeholder.com/150"],
    imageUploadHandler: async () =>
      Promise.resolve("https://picsum.photos/200/300"),
  }),

  // Code Blocks
  codeBlockPlugin({ defaultCodeBlockLanguage: "ts" }),
  sandpackPlugin({ sandpackConfig: sandpackConfig }),
  codeMirrorPlugin({
    codeBlockLanguages: {
      ts: "TS",
      tsx: "TSX",
      css: "CSS",
      txt: "Plain Text",
    },
  }),

  // Editing
  diffSourcePlugin({
    viewMode: "rich-text",
    diffMarkdown: "An older version",
    readOnlyDiff: true,
  }),

  // The markdown shortcuts plugin enables typing shortcuts (similar to Notion, recently ported to Google Docs) that initiate the corresponding markdown blocks.
  markdownShortcutPlugin(),

  // Embed - Youtube Videos
  directivesPlugin({
    directiveDescriptors: [
      YoutubeDirectiveDescriptor,
      AdmonitionDirectiveDescriptor,
    ],
  }),
];
