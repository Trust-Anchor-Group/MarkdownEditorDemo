var NrEditors = 0;

function AddEditor()
{
	var Editors = document.getElementById("Editors");
	var Div = document.createElement("DIV");
	Div.innerHTML = CreateHTMLDynamicScalingEditor({ Nr: ++NrEditors });
	Editors.appendChild(Div);
}