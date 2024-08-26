#!/bin/sh
"/home/fayek/.local/share/JetBrains/Toolbox/apps/intellij-idea-community-edition/jbr/bin/java" -cp "/home/fayek/.local/share/JetBrains/Toolbox/apps/intellij-idea-community-edition/plugins/vcs-git/lib/git4idea-rt.jar:/home/fayek/.local/share/JetBrains/Toolbox/apps/intellij-idea-community-edition/lib/externalProcess-rt.jar" git4idea.http.GitAskPassApp "$@"
