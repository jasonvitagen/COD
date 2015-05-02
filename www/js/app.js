// App Module
angular.module('CiscoOnDemandApp', ['ngRoute', 'CiscoOnDemandControllers', 'CiscoOnDemandDirectives'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardCtrl'
      })
      .when('/create-question', {
        templateUrl: 'views/create-question.html',
        controller: 'createQuestionCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'searchCtrl'
      })
      .when('/search-result', {
        templateUrl: 'views/search-result.html',
        controller: 'searchResultCtrl'
      })
      .when('/search-advanced', {
        templateUrl: 'views/search-advanced.html',
        controller: 'searchAdvancedCtrl'
      })
      .when('/discussion', {
        templateUrl: 'views/discussion.html',
        controller: 'discussionCtrl'
      })
      .otherwise({
        redirectTo: '/dashboard'
      })
  }])
  .run(function(){
    FastClick.attach(document.body);
  })


// Controllers
angular.module('CiscoOnDemandControllers', [])
  .controller('discussionCtrl', function($scope, $route){
    $scope.discussion = {
      profile_pic: 'img/profile-pic/user1-29.png',
      username: 'gitsindonesia',
      num_question: 2,
      rating: 5,
      date: '3h',
      content: 'Donec sodales nulla vel ante ultricies, a consectetur augue pharetra. Fusce eros lacus, laoreet eget arcu vel, lobortis tincidunt velit.',
      replies: [{
        profile_pic: 'img/profile-pic/user2-29.png',
        username: 'ibun',
        num_question: 14,
        rating: 4,
        date: '2h',
        content: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        correct_vote: 2,
        answers: [{
          content: 'I agree with this answer. Lorem ipsum dolor sit amet',
          username: 'gitsindonesia',
          date: '28 May 14',
          time: '10:15'
        },
        {
          content: 'I think you should restart the server first.',
          username: 'rayrizaldy',
          date: '28 May 14',
          time: '11:15'
        }]
      },
      {
        profile_pic: 'img/profile-pic/user2-29.png',
        username: 'rayrizaldy',
        num_question: 1,
        rating: 4,
        date: '1h',
        content: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        correct_vote: 0
      }]
    };
    $scope.submitReply = function(){
      $route.reload();
    }
  })
  .controller('searchCtrl', function(){

  })
  .controller('searchResultCtrl', function($scope, $route){
    $scope.question_list = [{
        title: 'MPLS failover with VPN?',
        date: 'Feb 25, 2010',
        last_activity: 'Okt 28, 2014',
        owner: 'gitsindonesia',
        tags: 'LAN, Switching & Routing',
        rating: 5,
        type: 'question',
        answered: true,
        summary: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit...'
      },
      {
        title: 'ipsec VPN Map',
        date: 'May 6, 2012',
        last_activity: 'May 8, 2012',
        owner: 'amtbhatnagar',
        tags: 'VPN',
        rating: 3,
        type: 'question',
        answered: false,
        summary: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit...'
      },
      {
        title: 'VPN Date Sheet',
        date: 'May 26, 2010',
        last_activity: 'Sep 10, 2012',
        owner: 'ibun',
        tags: 'VPN, Switching & Routing',
        rating: 4,
        type: 'document',
        summary: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit...'
      },
      {
        title: 'Video: VPN Configuration',
        date: 'Jul 19, 2011',
        last_activity: 'Sep 11, 2012',
        owner: 'ekabhone',
        tags: 'LAN, Switching & Routing',
        rating: 4,
        type: 'video',
        summary: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit...'
      }];

      $scope.applyFilter = function(){
        $route.reload();
      }
  })
  .controller('searchAdvancedCtrl', function(){

  })
  .controller('createQuestionCtrl', function($scope, $log){
    $scope.submit = function(){
      $log.info('submitting question');
    }
  })
  .controller('dashboardCtrl', function($scope){
    $scope.my_questions = [{
        title: 'MPLS failover with VPN?',
        date: '25 Okt 2013',
        tags: 'LAN, Switching & Routing',
        rating: 5,
        answered: true
      },
      {
        title: 'Problem with MPLS VPN over TE?',
        date: '10 Okt 2013',
        tags: 'VPN',
        rating: 4,
        answered: false
      },
      {
        title: 'Router to Router SSL',
        date: '01 Jan 2013',
        tags: 'LAN, SSL, Router',
        rating: 0,
        answered: false
      }];
    $scope.my_interests = [{
        title: 'MPLS failover with VPN?',
        date: 'Feb 25, 2010',
        last_activity: 'Okt 28, 2014',
        owner: 'gitsindonesia',
        tags: 'LAN, Switching & Routing',
        rating: 5,
        answered: true,
        read: false
      },
      {
        title: 'Problem with MPLS VPN over TE?',
        date: 'Feb 25, 2010',
        last_activity: 'Sep 28, 2014',
        owner: 'gitsindonesia',
        tags: 'LAN, Switching & Routing',
        rating: 4,
        answered: false,
        read: true
      },
      {
        title: 'MSE error 500?',
        date: 'Feb 25, 2010',
        last_activity: 'May 28, 2014',
        owner: 'rayrizaldy',
        tags: 'MSE, Switching & Routing',
        rating: 0,
        answered: false,
        read: true
      }];
    $scope.recent_activity = [{
        owner: 'You',
        title: 'MSE error 500?',
        date: 'May 12, 2014 04:09 PM',
        read: false,
        activity: 'created a question'
      },
      {
        owner: 'rayrizaldy',
        title: 'How to Install Prime Infrastructure',
        date: 'May 10, 2014 02:09 AM',
        read: false,
        activity: 'replied on'
      },
      {
        owner: 'You',
        title: 'How to Install Prime Infrastructure',
        date: 'Apr 02, 2014 01:00 AM',
        read: true,
        activity: 'rated 5 stars'
      }];
    $scope.announcements = [{
        owner: 'gitsindonesia',
        title: 'Cisco launchs MSE 8.2 update at the end of December 2014',
        date: 'May 12, 2014',
        read: false,
        tags: 'LAN, Switching & Routing'
      },
      {
        owner: 'gitsindonesia',
        title: 'Top Coders (gitsindonesia) Win CIsco CMX Mobility Challenge',
        date: 'May 12, 2014',
        read: true,
        tags: 'LAN, Switching & Routing'
      },
      {
        owner: 'gitsindonesia',
        title: 'Anonymous VPN & Proxy News Update',
        date: 'May 12, 2014',
        read: true,
        tags: 'LAN, Switching & Routing'
      }];
  })

// Directives
angular.module('CiscoOnDemandDirectives', [])
  .directive('rteEditor', function($log){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        $log.info(elem.attr('id'));
        $log.info(attrs.rteEditorToolbar);
        var quil = new Quill('#' + elem.attr('id'));
        quil.addModule('toolbar',{
          container: attrs.rteEditorToolbar
        })
      }
    }
  })
  .directive('hideOnScroll', function($log){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        // TODO
      }
    }
  })
  .directive('modal', function($log){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        var target = attrs.modal;
        var tooltip = undefined !== attrs.modalTooltip;

        if(tooltip){
          $(elem).tooltipster({
            content: $(target),
            position: 'bottom',
            minWidth: $(window).width() - 30,
            theme: 'tooltipster-green'
          });
          return;
        }

        $(target).hide();

        $(elem).on('click touch', function(){
          $(target).fadeToggle('fast', function(){
            $(target).toggleClass('visible');
          });
        });

        $(target).find('[data-modal-close]')
          .on('click touch', function(){
            $log.info('ouch');
            $(target).fadeOut('fast', function(){
              $(target).removeClass('visible');
            })
          });
      }
    }
  })
  .directive('collapseToggle', function($log){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        var target = attrs.collapseToggle;

        $(elem).addClass('collapse');

        $(elem).on('click touch', function(){
          $(target).slideToggle('fast', function(){
            $(elem).toggleClass('collapse');
          });
        })
      }
    }
  })
  .directive('multiAttachment', function($log){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        $(elem).MultiFile({
          list: ".file-attachment-list",
          STRING: {
            file: '$file<br/><span class="icon-file"></span><span>.pdf file</span>'
          }
        });
      }
    }
  })
  .directive('tagsinput', function($log){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        $(elem).tagsManager();
      }
    }
  })
  .directive('navigationDrawer', function($log){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        $('[data-navigation-drawer-toggle]').on('click touch', function(){
          $log.info('toggle');

          $(elem).toggleClass('active');
        });
      }
    }
  })
  .directive('starRating', function($log){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        elem.raty({
          score: parseInt(attrs.starRating),
          readOnly: undefined !== attrs.starRatingReadonly,
          starType: 'i'
        });

        if(attrs.starRating === "0"){
          $(elem).children().hide();
          $(elem).append('No Rating');
        }
      }
    }
  })
  .directive('accordion', function($log, $timeout){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        // $log.info(elem);

        elem.find('[data-accordion-content]').hide();

        var activeHeaders = elem.find('[data-accordion-header].active');
        if(activeHeaders.length < 1){
          activeHeaders = elem.find('[data-accordion-header]').first();
          activeHeaders.addClass('active');
        }
          
        activeHeaders
          .siblings('[data-accordion-content]').slideDown('fast');


        elem.find('[data-accordion-header]').on('click touch', function(){
          if($(this).hasClass('active')){
            return;
          }
          var targetContent = $(this).siblings('[data-accordion-content]');

          activeHeader = elem.find('[data-accordion-header].active');

          // close current active content
          activeHeader
            .removeClass('active')
            .siblings('[data-accordion-content]')
              .slideUp('fast');
          // open new active content
          targetContent
            .slideDown('fast', function(){
              $(this).siblings('[data-accordion-header]')
                .addClass('active');
              $('.ng-view').animate({
                scrollTop: targetContent.siblings('[data-accordion-header]').offset().top - 50
              }, 'fast');
            });
        });
      }
    }
  })