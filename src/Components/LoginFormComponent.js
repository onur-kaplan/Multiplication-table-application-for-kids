
const template = `<form class="px-2 login-submit" >
              <div class="form-group row">
                <label class="col-sm-4" for="userName">Kullanıcı Adı</label>
                <div class=" col-sm-8">
                  <input class="form-control"  type="text"  id="userName" placeholder="Kullanıcı Adı">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-4" for="userPass">Şifre</label>
                <div class=" col-sm-8">
                  <input class="form-control " type="password"  id="userPass" placeholder="Şifre">
                </div>
              </div>
              <div style="display: none;" class="alert alert-danger login-control-alert" role="alert">
                Kullanıcı adınız veya şifreniz yanlış!
              </div>
              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-success login-button">Submit</button>
              </div>
            </form>`;


export default class LoginFormComponent {
    render () {
        return template;
    }

    toString() {
        return 'sdasdsad';
    }
}
