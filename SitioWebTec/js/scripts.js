(function() {
  var Nav;

  Nav = {
    init: function() {
      this.setup();
      return this.uiBind();
    },
    setup: function() {
      return $('#mainnav').find('li:not(:last-child)').toggleClass('invisible');
    },
    uiBind: function() {
      return $(document).on('click', '#menu-toggle', function(e) {
        e.preventDefault();
        return $('#mainnav').find('li:not(:last-child)').toggleClass('animate').toggleClass('invisible');
      });
    }
  };

  Nav.init();

}).call(this);

