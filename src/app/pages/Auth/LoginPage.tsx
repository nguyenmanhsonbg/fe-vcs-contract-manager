import { useState } from "react";
import { Lock, Mail, Eye, EyeOff, ArrowRight, ArrowLeft, X, Info } from "lucide-react";
import { toast } from "sonner";
import imgLogo from "../../../imports/SốHoaTaiLiệu-1/01342b2bb964441edcb3fd61de43edf5fdb34da6.png";

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [authStep, setAuthStep] = useState<"login" | "forgot">("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Modals state
  const [is2FAOpen, setIs2FAOpen] = useState(false);
  const [isChangePassOpen, setIsChangePassOpen] = useState(false);
  const [otpDigits, setOtpDigits] = useState(["1", "1", "1", "1", "1", "1"]);
  const [saveIp, setSaveIp] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPass, setShowNewPass] = useState(false);

  function handleLoginSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!username) {
      toast.warning("Vui lòng nhập tên đăng nhập hoặc email!");
      return;
    }
    // Open 2FA modal step
    setIs2FAOpen(true);
  }

  function handle2FASubmit() {
    const code = otpDigits.join("");
    if (code.length < 6) {
      toast.warning("Vui lòng nhập đủ 6 chữ số mã xác thực!");
      return;
    }
    toast.success("Bạn đã đăng nhập thành công!");
    setIs2FAOpen(false);
    onLoginSuccess();
  }

  function handleForgotSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Hướng dẫn đặt lại mật khẩu đã được gửi đến email của bạn!");
    setAuthStep("login");
  }

  function handleOtpChange(index: number, val: string) {
    if (val.length > 1) val = val.slice(-1);
    const updated = [...otpDigits];
    updated[index] = val;
    setOtpDigits(updated);

    if (val && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  }

  function handleChangePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newPassword.length < 8) {
      toast.error("Mật khẩu mới phải có ít nhất 8 ký tự!");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu xác nhận không trùng khớp!");
      return;
    }
    toast.success("Mật khẩu của bạn đã được thay đổi thành công!");
    setIsChangePassOpen(false);
  }

  return (
    <div className="h-screen w-screen bg-white p-4 sm:p-6 lg:p-8 overflow-hidden flex items-center justify-center font-sans antialiased">
      {/* 2 Column Split Grid */}
      <div className="w-full max-w-[1440px] h-full max-h-[860px] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Side: Soft Grey Rounded Container with Viettel Cyber Security Logo */}
        <div className="lg:col-span-7 h-full bg-[#f7f8f9] rounded-[20px] lg:rounded-[24px] p-6 lg:p-8 flex flex-col justify-start items-start relative border border-slate-100/60">
          <img src={imgLogo} alt="Viettel Cyber Security" className="h-9 lg:h-10 w-auto object-contain" />
        </div>

        {/* Right Side: Auth Form Container */}
        <div className="lg:col-span-5 h-full flex flex-col justify-center items-center px-4">
          {authStep === "login" ? (
            <div className="w-full max-w-[380px] space-y-6 my-auto">
              {/* Header Titles */}
              <div>
                <h1 className="text-[26px] sm:text-[28px] font-normal text-[#2f2b3d] leading-[1.25] tracking-tight">
                  Chào mừng đến với
                </h1>
                <h2 className="text-[26px] sm:text-[28px] font-bold text-[#2f2b3d] leading-[1.25] tracking-tight">
                  Viettel Cyber Security!
                </h2>
                <p className="text-[13px] text-[#8f8d95] mt-1.5 font-normal">
                  Vui lòng đăng nhập vào tài khoản của bạn.
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                {/* Field 1: Tên đăng nhập */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium text-[#393740] block">Tên đăng nhập</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="your.email@vcs.vn"
                      className="w-full h-[40px] rounded-[6px] border border-[#dbdade] bg-white pl-9 pr-3 text-[13px] text-[#2f2b3d] outline-none placeholder:text-[#b4b2b7] focus:border-[#3f81ea] transition-colors font-normal"
                    />
                    <Mail className="size-4 text-[#8f8d95] absolute left-3 top-3 pointer-events-none stroke-[1.75]" />
                  </div>
                </div>

                {/* Field 2: Mật khẩu */}
                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium text-[#393740] block">Mật khẩu</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Vui lòng nhập mật khẩu"
                      className="w-full h-[40px] rounded-[6px] border border-[#dbdade] bg-white pl-9 pr-9 text-[13px] text-[#2f2b3d] outline-none placeholder:text-[#b4b2b7] focus:border-[#3f81ea] transition-colors font-normal"
                    />
                    <Lock className="size-4 text-[#8f8d95] absolute left-3 top-3 pointer-events-none stroke-[1.75]" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-[#8f8d95] hover:text-[#5d586c] transition-colors cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="size-4 stroke-[1.75]" /> : <Eye className="size-4 stroke-[1.75]" />}
                    </button>
                  </div>
                </div>

                {/* Options Row */}
                <div className="flex items-center justify-between text-[13px] pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-[#5d586c] font-normal">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="size-4 accent-[#3f81ea] rounded border-slate-300"
                    />
                    <span>Lưu tài khoản</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setAuthStep("forgot")}
                    className="text-[#ff4c51] font-normal text-[13px] hover:underline cursor-pointer"
                  >
                    Quên mật khẩu?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-[40px] rounded-[6px] bg-[#ff4c51] hover:bg-[#e64449] text-white font-medium text-[14px] flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <span>Đăng Nhập</span>
                  <ArrowRight className="size-4 stroke-[2]" />
                </button>
              </form>
            </div>
          ) : (
            /* Forgot Password Form */
            <div className="w-full max-w-[380px] space-y-6 my-auto">
              <div>
                <h1 className="text-[26px] sm:text-[28px] font-bold text-[#2f2b3d] leading-[1.25] tracking-tight">
                  Quên mật khẩu?
                </h1>
                <p className="text-[13px] text-[#8f8d95] mt-1.5 font-normal leading-relaxed">
                  Hãy nhập email của bạn và chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu cho bạn.
                </p>
              </div>

              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-medium text-[#393740] block">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="your.email@vcs.vn"
                      className="w-full h-[40px] rounded-[6px] border border-[#dbdade] bg-white pl-9 pr-3 text-[13px] text-[#2f2b3d] outline-none placeholder:text-[#b4b2b7] focus:border-[#3f81ea] transition-colors font-normal"
                    />
                    <Mail className="size-4 text-[#8f8d95] absolute left-3 top-3 pointer-events-none stroke-[1.75]" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-[40px] rounded-[6px] bg-[#ff4c51] hover:bg-[#e64449] text-white font-medium text-[14px] flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <span>Gửi Email Đặt Lại Mật Khẩu</span>
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setAuthStep("login")}
                    className="text-[#ff4c51] text-[13px] font-medium hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="size-3.5" />
                    <span>Trở Về Đăng Nhập</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* 2FA Modal */}
      {is2FAOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-[420px] bg-white rounded-[12px] shadow-2xl border border-slate-100 p-6 space-y-5 animate-in zoom-in-95 duration-200 relative">
            <div className="flex items-center justify-between">
              <h3 className="text-[20px] font-bold text-[#2f2b3d] tracking-tight">Xác thực hai yếu tố</h3>
              <button
                onClick={() => setIs2FAOpen(false)}
                className="p-1 rounded text-[#8f8d95] hover:text-[#2f2b3d] transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            <p className="text-[13px] text-[#5d586c] leading-relaxed">
              Một mã xác minh đã được gửi đến số điện thoại hoặc địa chỉ email của bạn. Mã này có hiệu lực trong vòng 5 phút.
            </p>

            {/* 6 OTP Digit Inputs */}
            <div className="flex justify-between items-center gap-2 py-1">
              {otpDigits.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-input-${idx}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  className="size-[44px] rounded-[6px] border border-[#dbdade] text-center text-[16px] font-semibold text-[#2f2b3d] outline-none focus:border-[#3f81ea] focus:ring-1 focus:ring-[#3f81ea]"
                />
              ))}
            </div>

            <label className="flex items-center gap-2 text-[13px] text-[#5d586c] cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={saveIp}
                onChange={(e) => setSaveIp(e.target.checked)}
                className="size-4 accent-[#3f81ea] rounded border-slate-300"
              />
              <span>Lưu địa chỉ IP</span>
            </label>

            <button
              onClick={handle2FASubmit}
              className="w-full h-[40px] rounded-[6px] bg-[#3f81ea] hover:bg-[#3471d4] text-white font-medium text-[14px] shadow-xs transition-colors cursor-pointer"
            >
              Xác Nhận
            </button>

            <div className="text-center text-[13px] text-[#8f8d95] pt-1">
              Chưa nhận được mã? Gửi lại mã qua{" "}
              <button
                onClick={() => toast.info("Đã gửi lại mã xác minh thành công!")}
                className="text-[#3f81ea] font-medium hover:underline cursor-pointer"
              >
                Email
              </button>{" "}
              hoặc{" "}
              <button
                onClick={() => toast.info("Đã gửi lại mã xác minh qua SMS thành công!")}
                className="text-[#3f81ea] font-medium hover:underline cursor-pointer"
              >
                SMS
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {isChangePassOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-[440px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800">Đổi mật khẩu</h3>
              <button
                onClick={() => setIsChangePassOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            <form onSubmit={handleChangePasswordSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[13px] font-medium text-[#393740] block">Mật khẩu mới</label>
                <div className="relative">
                  <input
                    type={showNewPass ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-[38px] rounded-[6px] border border-slate-200 bg-white px-3 pr-9 text-xs text-[#393740] outline-none focus:border-[#3f81ea]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPass(!showNewPass)}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showNewPass ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] font-medium text-[#393740] block">Xác nhận mật khẩu</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-[38px] rounded-[6px] border border-slate-200 bg-white px-3 text-xs text-[#393740] outline-none focus:border-[#3f81ea]"
                />
              </div>

              {/* Password Requirements Info Box */}
              <div className="bg-[#e8f2fe] border border-[#b8d6fc] rounded-[6px] p-3 text-xs text-[#3f81ea] space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <Info className="size-4 shrink-0" />
                  <span>Yêu cầu về mật khẩu:</span>
                </div>
                <ul className="pl-5 list-disc text-[11px] space-y-0.5 font-medium text-[#2d6ac5]">
                  <li>Ít nhất 8 ký tự</li>
                  <li>Bao gồm ít nhất một chữ cái viết thường và một chữ cái viết hoa</li>
                  <li>Bao gồm ít nhất một chữ số, ký hiệu hoặc khoảng trắng</li>
                </ul>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsChangePassOpen(false)}
                  className="flex-1 py-2 px-4 rounded-[6px] border border-slate-300 bg-white text-slate-700 font-medium text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 px-4 rounded-[6px] bg-[#3f81ea] hover:bg-[#3471d4] text-white font-medium text-xs shadow-sm transition-all cursor-pointer"
                >
                  Xác Nhận
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
