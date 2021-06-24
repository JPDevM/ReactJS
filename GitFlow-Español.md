#  Flujo de trabajo de Gitflow

El flujo de trabajo Gitflow es un flujo de trabajo de Git que  favorece el desarrollo continuo de software y las prácticas de  implementación de [DevOps](https://www.atlassian.com/devops/what-is-devops). Fue [Vincent Driessen en nvie](http://nvie.com/posts/a-successful-git-branching-model/) quien lo publicó por primera vez y quien lo popularizó.El flujo de  trabajo Gitflow define un modelo de creación de ramas estricto diseñado  con la publicación del proyecto como fundamento. Proporciona un marco  sólido para gestionar proyectos más grandes. 

Gitflow es ideal para los proyectos que tienen un ciclo de publicación programado, así como para la [práctica recomendada de DevOps](https://www.atlassian.com/devops/what-is-devops/devops-best-practices) de [entrega continua](https://www.atlassian.com/continuous-delivery). Este flujo de trabajo no añade ningún concepto o comando nuevo, aparte de los que se necesitan para el [flujo de trabajo de ramas de función](http://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Lo que hace es asignar funciones muy específicas a las distintas ramas y define cómo y cuándo deben estas interactuar. Además de las ramas `feature`, utiliza ramas individuales para preparar, mantener y registrar  publicaciones. Por supuesto, también te aprovechas de todas las ventajas que aporta el flujo de trabajo de ramas de función: solicitudes de  incorporación de cambios, experimentos aislados y una colaboración más  eficaz.

##  Inicio

En realidad, Gitflow es una especie de idea abstracta de un flujo de  trabajo de Git. Esto quiere decir que ordena qué tipo de ramas se deben  configurar y cómo fusionarlas. Explicaremos brevemente los objetivos de  las ramas a continuación. El conjunto de herramientas de git-flow es una herramienta de línea de comandos propiamente dicha que tiene un proceso de instalación. El proceso de instalación de git-flow es sencillo. Los  paquetes de git-flow están disponibles en varios sistemas operativos. En los sistemas OSX, puedes ejecutar `brew install git-flow`. En Windows, tendrás que [descargarte e instalar git-flow](https://git-scm.com/download/win). Después de instalar git-flow, puedes utilizarlo en tu proyecto ejecutando `git flow init`. Git-flow es un contenedor para Git. El comando `git flow init` es una prolongación del comando predeterminado `git init` y no cambia nada de tu repositorio aparte de crear ramas para ti.

##  Funcionamiento

![Flujo de trabajo de Git flow: ramas históricas](https://wac-cdn.atlassian.com/dam/jcr:a13c18d6-94f3-4fc4-84fb-2b8f1b2fd339/01%20How%20it%20works.svg?cdnVersion=1675)

###  Ramas de desarrollo y maestras

En vez de una única rama `master`, este flujo de trabajo utiliza dos ramas para registrar el historial del proyecto. La rama `master` almacena el historial de publicación oficial y la rama `develop` sirve como rama de integración para las funciones. Asimismo, conviene etiquetar todas las confirmaciones de la rama `master` con un número de versión.

El primer paso es complementar la `master` predeterminada con una rama `develop`. Una forma sencilla de hacerlo es que un desarrollador cree una rama `develop` vacía localmente y la envíe al servidor:

```shell
git branch develop
git push -u origin develop
```

Esta rama contendrá el historial completo del proyecto, mientras que la `master` contendrá una versión abreviada. A continuación, otros desarrolladores  deberían clonar el repositorio central y crear una rama de seguimiento  para `develop`.

A la hora de utilizar la biblioteca de extensiones de git-flow, ejecutar `git flow init` en un repositorio existente creará la rama `develop`:

```shell
$ git flow init


Initialized empty Git repository in ~/project/.git/
No branches exist yet. Base branches must be created now.
Branch name for production releases: [main]
Branch name for "next release" development: [develop]


How to name your supporting branch prefixes?
Feature branches? [feature/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []


$ git branch
* develop
 main
```

##  Ramas de función

Todas las funciones nuevas deben residir en su propia rama, que se pueden [enviar al repositorio central](https://www.atlassian.com/git/tutorials/syncing/git-push) para copia de seguridad/colaboración. Sin embargo, en vez de ramificarse de la `master`, las ramas `feature` utilizan la `develop` como rama primaria. Cuando una función está terminada, [se vuelve a fusionar en la de desarrollo](https://www.atlassian.com/git/tutorials/using-branches/git-merge). Las funciones no deben interactuar nunca directamente con la `master`.

![Flujo de trabajo de Git flow: ramas de función](https://wac-cdn.atlassian.com/dam/jcr:34c86360-8dea-4be4-92f7-6597d4d5bfae/02%20Feature%20branches.svg?cdnVersion=1675)

Ten en cuenta que las ramas `feature` combinadas con la rama `develop` conforman, a todos efectos, el flujo de trabajo de ramas de función. Sin embargo, el flujo de trabajo Gitflow no termina aquí.

Las ramas `feature` suelen crearse a partir de la última rama `develop`.

###  Creación de una rama de función

Sin las extensiones de git-flow:

```shell
git checkout develop
git checkout -b feature_branch
```

Cuando se utiliza la extensión de git-flow:

```shell
git flow feature start feature_branch
```

Sigue trabajando y utiliza Git como lo harías normalmente.

###  Finalización de una rama de función

Cuando hayas terminado con el trabajo de desarrollo en la función, el siguiente paso es fusionar `feature_branch` en `develop`.

Sin las extensiones de git-flow:

```shell
git checkout develop
git merge feature_branch
```

Con las extensiones de git-flow:

```shell
git flow feature finish feature_branch
```

##  Ramas de publicación

![Flujo de trabajo de Git flow: ramas de publicación](https://wac-cdn.atlassian.com/dam/jcr:8f00f1a4-ef2d-498a-a2c6-8020bb97902f/03%20Release%20branches.svg?cdnVersion=1675)

Cuando `develop` haya adquirido suficientes funciones para una publicación (o se acerque una fecha de publicación predeterminada), debes bifurcar una rama `release` a partir de una `develop`. Al crear esta rama, se inicia el siguiente ciclo de publicación, por lo que no pueden añadirse nuevas funciones una vez pasado este punto (en  esta rama solo deben producirse las soluciones de errores, la generación de documentación y otras tareas orientadas a la publicación). Cuando  está lista para el lanzamiento, la rama `release` se fusiona en la `master` y se etiqueta con un número de versión. Además, debería volver a fusionarse en `develop`, que podría haber progresado desde que se iniciara la publicación.

Utilizar una rama específica para preparar publicaciones hace posible que un equipo perfeccione la publicación actual mientras otro equipo  sigue trabajando en las funciones para la siguiente publicación.  Asimismo, crea fases de desarrollo bien definidas (por ejemplo, es fácil decir: "Esta semana nos estamos preparando para la versión 4.0" y verlo escrito en la estructura del repositorio).

Crear ramas `release` es otra operación de ramificación sencilla. Al igual que las ramas `feature`, las ramas `release` se basan en la rama `develop`. Se puede crear una nueva rama `release` utilizando los siguientes métodos.

Sin las extensiones de git-flow:

```shell
git checkout develop
git checkout -b release/0.1.0
```

Cuando se utilizan las extensiones de git-flow:

```shell
$ git flow release start 0.1.0
Switched to a new branch 'release/0.1.0'
```

En cuanto la publicación esté lista para su lanzamiento, se fusionará en la `master` y la `develop`; y luego se eliminará la rama `release`. Es importante volver a fusionarla en `develop` porque podrían haberse añadido actualizaciones críticas a la rama `release`, y las funciones nuevas tienen que poder acceder a ellas. Si tu  organización enfatiza la revisión de código, este sería el lugar ideal  para una solicitud de incorporación de cambios.

Para finalizar una rama `release`, utiliza los siguientes métodos:

Sin las extensiones de git-flow:

```shell
git checkout main
git merge release/0.1.0
```

O con la extensión de git-flow:

```shell
git flow release finish '0.1.0'
```

##  Ramas de corrección

![Flujo de trabajo de Git flow: ramas de corrección](https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg?cdnVersion=1675)

Las ramas de mantenimiento o de `"corrección"` (hotfix) sirven para reparar rápidamente las publicaciones de producción. Las ramas `hotfix` son muy similares a las ramas `release` y `feature`, salvo por el hecho de que se basan en la `master`, no en la `develop`. Esta es la única rama que debería bifurcarse directamente a partir de la `master`. Cuando se haya terminado de aplicar la corrección, debería fusionarse en la `master` y la `develop` (o la rama `release` actual), y la `master` debería etiquetarse con un número de versión actualizado.

Tener una línea de desarrollo específica para la corrección de  errores permite que tu equipo aborde las incidencias sin interrumpir el  resto del flujo de trabajo ni esperar al siguiente ciclo de publicación. Puedes concebir las ramas de mantenimiento como ramas `release` *ad hoc* que trabajan directamente con la `master`. Se puede crear una nueva rama `hotfix` utilizando los siguientes métodos:

Sin las extensiones de git-flow:

```shell
git checkout main
git checkout -b hotfix_branch
```

Cuando se utilizan las extensiones de git-flow: 

```shell
$ git flow hotfix start hotfix_branch
```

Al igual que al finalizar una rama `release`, una rama `hotfix` se fusiona tanto en la `master` como en la `develop`.

```shell
git checkout main
git merge hotfix_branch
git checkout develop
git merge hotfix_branch
git branch -D hotfix_branch
$ git flow hotfix finish hotfix_branch
```

##  Ejemplo

A continuación, se incluye un ejemplo completo que demuestra un flujo de ramas de función. Vamos a presuponer que tenemos una configuración  del repositorio con una rama `master`.

```
git checkout main
git checkout -b develop
git checkout -b feature_branch
# work happens on feature branch
git checkout develop
git merge feature_branch
git checkout main
git merge develop
git branch -d feature_branch
```

Además del flujo de `feature` y `release`, aquí tenemos un ejemplo de `hotfix`:

```shell
git checkout main
git checkout -b hotfix_branch
# work is done commits are added to the hotfix_branch
git checkout develop
git merge hotfix_branch
git checkout main
git merge hotfix_branch
```

##  Resumen

En este artículo, hemos explicado el flujo de trabajo de Gitflow. Gitflow es uno de los muchos estilos de [flujos de trabajo de Git](https://www.atlassian.com/git/tutorials/comparing-workflows) que podéis utilizar tu equipo y tú.

Algunos puntos clave que debes saber sobre Gitflow son los siguientes:

- Este flujo de trabajo es ideal para los flujos de trabajo de software basados en publicaciones.
- Gitflow ofrece un canal específico para las correcciones de producción.
   

El flujo general de Gitflow es el siguiente:

1. Se crea una rama `develop` a partir de la `master`.
2. Se crea una rama `release` a partir de la `develop`.
3. Se crean ramas `feature` a partir de la `develop`.
4. Cuando se termina una rama `feature`, se fusiona en la rama `develop`.
5. Cuando la rama `release` está lista, se fusiona en la `develop` y la `master`.
6. Si se detecta una incidencia en la `master`, se crea una rama `hotfix` a partir de la `master`.
7. Una vez terminada la rama `hotfix`, esta se fusiona tanto en la `develop` como en la `master`.

Fuente: [Attlasian](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow?fbclid=IwAR2juZ29zogRWok1yC-5N_viiupsEZyGSJbfIM3YI79nUzvmy7XkoHB9LLk)

