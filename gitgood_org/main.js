var gitDictionary = [
	{"command" : "add" , "description" : "Add file contents to the index"},
	{"command" : "status" , "description" : "Show the working tree status"},
	{"command" : "diff" , "description" : "Show changes between commits, commit and working tree, etc"},
	{"command" : "commit" , "description" : "Record changes to the repository"},
	{"command" : "reset" , "description" : "Reset current HEAD to the specified state"},
	{"command" : "rm" , "description" : "Remove files from the working tree and from the index"},
	{"command" : "mv" , "description" : "Move or rename a file, a directory, or a symlink"},
	{"command" : "branch" , "description" : "List, create, or delete branches"},
	{"command" : "checkout" , "description" : "Switch branches or restore working tree files"},
	{"command" : "merge" , "description" : "Join two or more development histories together"},
	{"command" : "mergetool" , "description" : "Run merge conflict resolution tools to resolve merge conflicts"},
	{"command" : "log" , "description" : "Show commit logs"},
	{"command" : "stash" , "description" : "Stash the changes in a dirty working directory away"},
	{"command" : "tag" , "description" : "Create, list, delete or verify a tag object signed with GPG"},
	{"command" : "fetch" , "description" : "Download objects and refs from another repository"},
	{"command" : "pull" , "description" : "Fetch from and integrate with another repository or a local branch"},
	{"command" : "push" , "description" : "Update remote refs along with associated objects"},
	{"command" : "remote" , "description" : "Manage set of tracked repositories"},
	{"command" : "submodule" , "description" : "Initialize, update or inspect submodules"},
	{"command" : "show" , "description" : "Show various types of objects"},
	{"command" : "shortlog" , "description" : "Summarize git log output"},
	{"command" : "describe" , "description" : "Describe a commit using the most recent tag reachable from it"},
	{"command" : "apply" , "description" : "Apply a patch to files and/or to the index"},
	{"command" : "cherry-pick" , "description" : "Apply the changes introduced by some existing commits"},
	{"command" : "rebase" , "description" : "Reapply commits on top of another base tip"},
	{"command" : "revert" , "description" : "Revert some existing commits"},
	{"command" : "bisect" , "description" : "Use binary search to find the commit that introduced a bug"},
	{"command" : "blame" , "description" : "Show what revision and author last modified each line of a file"},
	{"command" : "grep" , "description" : "Print lines matching a pattern"},
	{"command" : "init" , "description" : "Create an empty Git repository or reinitialize an existing one"},
	{"command" : "clone" , "description" : "Clone a repository into a new directory"},
	{"command" : "config" , "description" : "Get and set repository or global options"},
	{"command" : "help" , "description" : "Display help information about Git, but thats why you are here ;)"},
	{"command" : "clean" , "description" : "Remove untracked files from the working tree"},
	{"command" : "gc" , "description" : "Cleanup unnecessary files and optimize the local repository"},
	{"command" : "fsck" , "description" : "Verifies the connectivity and validity of the objects in the database"},
	{"command" : "reflog" , "description" : "Manage reflog information"},
	{"command" : "filter-branch" , "description" : "Rewrite branches"},
	{"command" : "instaweb" , "description" : "Instantly browse your working repository in gitweb"},
	{"command" : "archive" , "description" : "Create an archive of files from a named tree"},
	{"command" : "bundle" , "description" : "Move objects and refs by archive"}
];

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

function init() {
	var list = document.getElementById("myUL");
	for (var i = 0; i < gitDictionary.length; i++) {
		list.innerHTML += "<li><a href='#'><span style='color:red'>"
						   + gitDictionary[i].command
						   + "</span> - " + gitDictionary[i].description +"</a></li>";
	}
}