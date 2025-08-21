# Command Overview

In this chapter, we will briefly introduce the command system in Pantheon-CLI. Pantheon-CLI has three different types of commands: `System Commands`, `Dialog Commands`, and `Program Commands`.

## 1. System Commands

As the name suggests, system commands are built-in commands of Pantheon-CLI. These commands generally start with `\`, such as `\help` and `\model`. These are system commands, and we can use `\help` to view almost all system commands.

## 2. Dialog Commands

Dialog commands are where the large language model automatically analyzes user input and determines which tools to execute. Currently, Pantheon-CLI has over 60+ tools, covering file loading `read_file`, web fetching `web_fetch`, web search `web_search`, running python `run_python_code`, and more.

If you mention tool function names in the conversation, Pantheon-CLI will directly call the corresponding tool function for analysis.

## 3. Program Commands

Since Pantheon-CLI is a hybrid programming terminal, compared to other CLIs, Pantheon-CLI supports directly running `Python`, `R`, and `Julia` code, and these variables are saved during program execution. They can be used by `dialog commands`, and variables from `dialog commands` can also be directly used. It's a mutual process.