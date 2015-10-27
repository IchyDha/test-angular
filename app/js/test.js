angular.module('todo-app', [])
  .directive('myCustomDirective', function() {
    return {
      restrict: 'E',
      scope: {
        ngModel: '=',
      },
      templateUrl: 'template.html',
    };
  })
  .controller('todoCtrl', [function() {

    var _this = this;
    this.todoTest = {task: 'xxx', done: true};
    this.todos = [{
      task: 'abcd',
      done: true,
    }, {
      task: 'def',
      done: true,
    }, {
      task: 'abcd',
      done: true,
    }, {
      task: 'abcd',
      done: true,
    }, {
      task: 'abcd',
      done: false,
    },
  ];

    this.archives = [];

    this.submit = function() {
      if (angular.isUndefined(_this.todoText) || _.isEmpty(_this.todoText)) {
        return;
      }

      _this.todos.push({
        task: _this.todoText,
        done: false,
      });
      _this.todoText = '';
    };

    this.archive = function() {

      var removed = _.remove(_this.todos, function(eachTodo) {
        return eachTodo.done;
      });

      removed = _.forEach(removed, function(eachTodo) {
        eachTodo.done = false;
      });

      _this.archives.push(removed);
      _this.archives = _.flatten(_this.archives);
    };

    this.undoneCount = function() {
      return _this.todos.filter(function(eachTodo) {
        return !eachTodo.done;
      }).length;
    };

    this.resume = function() {

      var resumed = _.remove(_this.archives, function(eachTodo) {
        return eachTodo.done;
      });

      _this.todos.push(resumed);
      _this.todos = _.flatten(_this.todos);

    };
  },
]);
