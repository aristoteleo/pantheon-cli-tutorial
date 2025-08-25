# 2.7 Pantheon-Notebook

## 1. Installation

For Pantheon-CLI, we have also added support in JupyterLab. You can install it using:

```shell
pip install 'pantheon-cli[notebook]'
```

Alternatively, you can install it separately:

```shell
pip install pantheon-notebook
```

The usage workflow in Notebook is consistent with terminal usage, though Notebook currently does not support R/Julia.

## 2. Special Installation

For Stanford students, we typically use Sherlock resources. On Sherlock, we use OnDemand to launch JupyterLab directly. However, the Kernel we run often conflicts with the default Kernel, so most of the time we select our newly created conda environment when running. In this case, if we install pantheon-notebook in the conda environment, we cannot see pantheon-notebook in the main JupyterLab interface.

The solution is as follows:
First, request JupyterLab resources on a dev node (any node is fine, we choose dev because it's faster to allocate). Note that the Python version must be greater than 3.10, so only 3.12 is available. Once allocated, click into it and directly enter in the terminal:

```shell
pip install 'pantheon-cli[notebook]'
```

After the installation is complete, the program on this dev node is no longer needed. At this point, when you open JupyterLab on any newly requested node, you will find that pantheon-notebook is already installed.