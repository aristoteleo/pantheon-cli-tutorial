# 2.7 Pantheon-Notebook

## 1. 安装

对于Pantheon-CLI，我们在Jupyterlab中也添加了对应的支持，我们可以通过

```shell
pip install 'pantheon-cli[notebook]'
```

来进行安装，当然你也可以单独安装

```shell
pip install pantheon-notebook
```

在Notebook中的使用流程与终端中使用保持一致，不过目前Notebook还不支持R/Julia。

## 2. 特殊安装

对于Stanford的学生，我们一般会使用Sherlock资源，在Sherlock上，我们会使用Ondemand直接启动Jupyterlab。但是，我们运行的Kernel往往跟默认的Kernel会有冲突，因此我们在运行的时候大部分时候都是选择我们conda新建的环境，这时候，如果我们把pantheon-notebook装到conda的环境下，我们也无法在主Jupyterlab界面看见pantheon-notebook。

解决方案如下：
我们先在dev节点（任意节点均可，选择dev是因为申请快）申请Jupyterlab资源，需要注意的是，python版本必须大于3.10，因此只有3.12可选。等到申请上来之后，我们点进去，直接在终端输入

```shell
pip install 'pantheon-cli[notebook]'
```

等待安装完毕之后，该dev节点的程序就没用来。这时候，我们在新申请的任意节点上打开Jupyterlab，你会发现都装好来pantheon-notebook。