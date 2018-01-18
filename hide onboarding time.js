function onLoad() {

    var hasRole = g_user.hasRoleExactly('itil_admin');


    if (!hasRole) {

        g_form.setDisplay('u_start_date', true);

    }


    else {

        g_form.setDisplay('u_start_date', false);

    }

}







