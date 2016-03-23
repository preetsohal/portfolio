var articleView = {};

  categoryView.populateFilters = function() {
    $('category').each(function() {
      if (!$(this).hasClass('template')) {
        var val = $(this).find('address a').text();
        var optionTag = '<option value="' + val + '">' + val + '</option>';
        // Done: Ensure authors listed in the filter are unique
        if ($('#project-filter option[value="' + val + '"]').length === 0) {
          $('#project-filter').append(optionTag);
        }

        val = $(this).attr('data-category');
        optionTag = '<option value="' + val + '">' + val + '</option>';
        if ($('#Contact-filter option[value="' + val + '"]').length === 0) {
          $('#Contact-filter').append(optionTag);
        }
      }
    });
  };

  categoryView.handleProjectFilter = function() {
    $('#author-filter').on('change', function() {
      if ($(this).val()) {
        $('category').hide();
        $('category[data-project="' + $(this).val() + '"]').fadeIn();
      } else {
        $('category').fadeIn();
        $('category.template').hide();
      }
      $('#project-filter').val('');
    });
  };

  categoryView.handleContactFilter = function() {
    $('#project-filter').on('change', function() {
      if ($(this).val()) {
        $('category').hide();
        $('category[data-Contact="' + $(this).val() + '"]').fadeIn();
      } else {
        $('category').fadeIn();
        $('category.template').hide();
      }
      $('#Contact-filter').val('');
    });
  };
