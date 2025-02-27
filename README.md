MarkdownEditorDemo
=====================

This project contains a simple demo-page that shows how the Markdown Editor feature works.

How the Markdown Editor works
--------------------------------

To enable the Markdown Editor, you need to include the `/MarkdownEditor.js` JavaScript file,
as well as the `/MarkdownEditor.cssx` CSSX file. You then include the `/MarkdownEditor.md` file
just before the `<textarea>` element you want to turn into a Markdown editor.

Example:

	Title: Simple
	Description: Simple Markdown Editor
	Date: 2025-02-26
	Author: Peter Waher
	Master: /Master.md
	UserVariable: User
	Privilege: Admin.Lab.Markdown
	Privilege: Admin.Lab.Script
	Login: /Login.md
	JavaScript: /MarkdownEditor.js
	CSS: /MarkdownEditor.cssx

	=============================================

	Simple Markdown Editor
	=========================

	![](/MarkdownEditor.md)
	<textarea autofocus="autofocus" wrap="hard"></textarea>

For more examples, check the different demo pages in this project.


Installable Package
----------------------

The `MarkdownEditorDemo` project contains an example demo page. You can either copy the files 
listed below to your Neuron(R), or install a prepared package file containing the files.

| Package information                                                                                                              ||
|:-----------------|:---------------------------------------------------------------------------------------------------------------|
| Package          | `TAG.MarkdownEditorDemo.package`                                                                                |
| Installation key | `TBD` |
| More Information | TBD |


Project Files
----------------

| File                                        | Description                                                                  |
|:--------------------------------------------|:-----------------------------------------------------------------------------|
| `Root\MarkdownEditorDemo\DynamicEditor.md`  | Defines an editor that will be dynamically added by the user.                |
| `Root\MarkdownEditorDemo\DynamicEditors.js` | JavaScript for the `DynamicEditors.md` page.                                 |
| `Root\MarkdownEditorDemo\DynamicEditors.md` | Page where the user can add editors dynamically.                             |
| `Root\MarkdownEditorDemo\Index.md`          | First page in the demo, that allows users to describe what they want to buy. |
| `Root\MarkdownEditorDemo\LimitedSpace.md`   | Page that tests the editor using limited space.                              |
| `Root\MarkdownEditorDemo\Scaling.md`        | Page that has an editor that scales with the content.                        |
| `Root\MarkdownEditorDemo\Simple.md`         | Page that tests the basic funcionality of the editor.                        |
| `Root\MarkdownEditorDemo\TwoEditors.md`     | Page that tests two edits at the same time.                                  |

Gateway.config
-----------------

To simplify development, once the project is cloned, add a `FileFolder` reference
to your repository folder in your [gateway.config file](https://lab.tagroot.io/Documentation/IoTGateway/GatewayConfig.md). 
This allows you to test and run your changes to Markdown and Javascript immediately, 
without having to synchronize the folder contents with an external 
host, or recompile or go through the trouble of generating a distributable software 
package just for testing purposes.

Example of how to point a web folder to your project folder:

```
<FileFolders>
  <FileFolder webFolder="/MarkdownEditorDemo" folderPath="C:\My Projects\MarkdownEditorDemo\Root\MarkdownEditorDemo"/>
</FileFolders>
```

**Note**: Once the file folder reference is added, you need to restart the IoT Gateway service for the change to take effect.

**Note 2**:  Once the gateway is restarted, the source for the files is in the new location. Any changes you make in the corresponding
`ProgramData` subfolder will have no effect on what you see via the browser.

**Note 3**: This file folder is only necessary on your developer machine, to give you real-time updates as you edit the files in your
developer folder. It is not necessary in a production environment, as the files are copied into the correct folders when the package 
is installed.

Run the Demo
---------------

Once you have copied the project files into a suitable folder, and possibly configured the `gateway.config` file and restarted the Neuron(R),
open the `MarkdownEditorDemo/Index.md` file in a browser (using the appropriate URL) to test the demo of the Neuro-Checkout.
