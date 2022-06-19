import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Sidebar from '../components/organisms/SIdebar';
import Input from '../components/atoms/input';
import { JWTPayloadTypes, UserTypes } from '../../services/data-types';
import { updateProfile } from '../../services/member';

interface UserStateTypes {
  id : string;
  username : string;
  email : string;
  avatar : any;
  phoneNumber : string;
}

export default function editProfile() {
  const [user, setUser] = useState<UserStateTypes>({
    id: '',
    username: '',
    email: '',
    avatar: '',
    phoneNumber: '',
  });
  const [imagePreview, setImagePreview] = useState('/');
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload : JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload : UserTypes = payload.player;
      // const IMG = process.env.NEXT_PUBLIC_IMG;
      // user.avatar = `${IMG}/${userFromPayload.avatar}`;
      setUser(userFromPayload);
    }
  }, []);

  const onSubmit = async () => {
    const data = new FormData();
    data.append('image', user.avatar);
    data.append('username', user.username);
    data.append('phoneNumber', user.phoneNumber);
    const response = await updateProfile(data, user.id);
    if (response.error) {
      toast.error(response.message);
    } else {
      Cookies.remove('token');
      router.push('/sign-in');
    }
  };
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="Settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  <img src={user.avatar} width="90" height="90" className="avatar img-fluid" alt="avatar" />
                  <div
                    className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center"
                  >
                    <Image src="/icon/upload.svg" width={120} height={120} />
                  </div>
                </div>
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview ? <img src={imagePreview} alt="img-preview" width={90} height={90} /> : <img alt="icon-upload" src={user.avatar} width={90} height={90} />}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const img = event.target.files![0];
                      setImagePreview(URL.createObjectURL(img));
                      setUser({
                        ...user,
                        avatar: img,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Name"
                  value={user.username}
                  onChange={(event) => setUser({
                    ...user,
                    username: event.target.value,
                  })}
                />
              </div>
              <div className="pt-30">
                <Input label="Email Address" value={user.email} disabled />
              </div>
              {/* <div className="pt-30">
                <Input label="Enter Phone" />
              </div> */}
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={onSubmit}
                >
                  Save My Profile

                </button>
              </div>
            </form>

          </div>

        </div>
      </main>
    </section>
  );
}
